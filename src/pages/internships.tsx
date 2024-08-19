import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";
import { collection, DocumentReference, getDoc, getDocs } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Config/firebase.config";
import React from "react";
import firebase from "firebase/compat/app";

const internships = () => {
  interface Farm {
    name: string;
    location: string;
  }

  interface MyData {
    id: string;
    title: string;
    supervisor: string;
    slots: number;
    farm: DocumentReference<Farm>;
    image: string;
    createdAt: firebase.firestore.Timestamp;
  }

  interface FirestoreData {
    title: string;
    supervisor: string;
    slots: number;
    farm: DocumentReference<Farm>;
    image: string;
    createdAt: firebase.firestore.Timestamp;
  }

  const [internshipList, setInternshipList] = useState<MyData[]>([]);
  const [loading, setLoading] = useState(true);
  const internshipCollection = collection(db, "internships");
  const [farmData, setFarmData] = useState<Record<string, Farm>>({});

  useEffect(() => {
    const getInternships = async () => {
      try {
        const data = await getDocs(internshipCollection);
        const filteredData = data.docs.map((doc) => ({
          ...(doc.data() as FirestoreData),
          id: doc.id,
        }));

        const farms = {};
        for (const internship of filteredData) {
          const farmDoc = await getDoc(internship.farm);
          if (farmDoc.exists()) {
            farms[internship.farm.id] = farmDoc.data() as Farm;
          }
        }
        setFarmData(farms);
        setInternshipList(filteredData);
      } catch (err) {
        console.log("my error", err);
      } finally {
        setLoading(false);
      }
    };

    getInternships();
  }, []);

  const getDuration = (timestamp: firebase.firestore.Timestamp) => {
    const now = new Date();
    const postDate = timestamp.toDate();
    const seconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    console.log(`Seconds: ${seconds}`); 

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 60);
    if (interval >= 1)
      return `${interval} minute${interval > 1 ? "s" : ""} ago`;

    return `${Math.floor(seconds)} second${seconds > 1 ? "s" : ""} ago`;
  };
  
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="index.html">
              <img src={logo} alt="" className="img-fluid"></img>
            </a>
            AniScholar
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <i className="bi bi-chevron-right"></i>
              <li style={{ color: " #27ae60" }}>Internships</li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container d-flex justify-content-center p-5">
            <h1 className="m-0" style={{ color: "#27ae60" }}>
              Internships
            </h1>
          </div>
        </section>

        <div className="container">
          {loading ? (
            <div id="loadingSpinner" className="text-center">
              <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
              </div>
              <p>Loading internships, please wait...</p>
            </div>
          ) : (
            internshipList.map((internship) => (
              <>
                <div className="row mt-5 mb-5">
                  <div className="col-md-6 internship">
                    <div className="card mb-3 shadow card-borderless">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <img
                            src={internship.image}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <div className="d-flex mb-4 align-items-center">
                              <div>
                                <h5 className="card-title mb-1">
                                  {internship.title}
                                </h5>
                                <p className="text-muted mb-0">
                                  <strong>Supervisor: </strong>
                                  {internship.supervisor}
                                </p>
                              </div>
                            </div>
                            <p className="card-text mb-1">
                              <strong>Farm: </strong>
                              <Link
                                className="text-decoration-none"
                                to={`/farm/${internship.farm.id}`}
                              >
                                {farmData[internship.farm.id]?.name ||
                                  "Loading..."}
                              </Link>
                            </p>
                            <h6 className="mb-3">
                              Available Slots:
                              <span className="badge bg-primary-subtle text-primary  badge-border">
                                {internship.slots}
                              </span>
                            </h6>

                            <div className="d-flex justify-content-between align-items-center">
                              <p className="card-text">
                                <small className="text-body-secondary">
                                  Posted {getDuration(internship.createdAt)}
                                </small>
                              </p>
                              <Link
                                to="/applicationForm"
                                className="btn bg-success text-white"
                              >
                                Apply Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default internships;
