import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";
import { collection, getDocs } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Config/firebase.config";

const internships = () => {
  interface MyData {
    title: string;
    supervisor: string;
    slots: number;
    farm: string;
  }
  const [internshipList, setInternshipList] = useState<MyData[]>([]);

  const internshipCollection = collection(db, "internships");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getDocs(internshipCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setInternshipList(filteredData);
      } catch (err) {
        console.log("my error", err);
      }
    };

    getBlogs();
  }, []);
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
          <div className="row mt-5 row-cols-xxl-5 row-cols-lg-3 row-cols-1">
            <div className="col">
              {internshipList.map((internship) => (
                <div className="card shadow card-borderless card-body">
                  <div className="d-flex mb-4 align-items-center">
                    <div>
                      <h5 className="card-title mb-1">{internship.title}</h5>
                      <p className="text-muted mb-0">
                        <strong>Supervisor: </strong>
                        {internship.supervisor}
                      </p>
                    </div>
                  </div>
                  <p className="card-text mb-1">
                    <strong>Farm: </strong>
                    <Link className="text-decoration-none" to="/farm">
                      {internship.farm}
                    </Link>
                  </p>
                  <h6 className="mb-3">
                    Available Slots:
                    <span className="badge bg-primary-subtle text-primary  badge-border">
                      {internship.slots}
                    </span>
                  </h6>
                  <Link
                    to="/applicationForm"
                    className="btn bg-success text-white"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default internships;
