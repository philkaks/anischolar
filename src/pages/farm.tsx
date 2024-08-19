import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../Config/firebase.config";

const farm = () => {

   const [farmData, setFarmData] = useState(null);

   useEffect(() => {
     const docRef = doc(db, "farms", "farmId"); // Replace with your document ID
     getDoc(docRef)
       .then((doc) => {
         if (doc.exists()) {
           setFarmData(doc.data());
         } else {
           // Handle no document found
           console.log("No such document!");
         }
       })
       .catch((error) => {
         console.error("Error getting document:", error);
       });
   }, []);


  return (
    <div className="">
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
                <Link className="text-decoration-none" to="/interships">
                  Internships
                </Link>
              </li>
              <i className="bi bi-chevron-right"></i>
              <li style={{ color: " #27ae60" }}>Farm</li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <div className=" page-title dark-background" data-aos="fade">
        <div className="container position-relative">
          <h1>About</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className=".breadcrumbs-2">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="about-3" className="about-3 section">
        <div className="container">
          <div className="row gy-4 justify-content-between align-items-center">
            <div
              className="col-lg-6 order-lg-2 position-relative"
              data-aos="zoom-out"
            >
              <img
                src={farmData.image}
                alt="Image"
                className="img-fluid"
              />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox pulsating-play-btn"
              >
                <span className="play">
                  <i className="bi bi-play-fill"></i>
                </span>
              </a>
            </div>
            <div
              className="col-lg-5 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="content-title mb-4">Plants Make Life Better</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus placeat, atque qui voluptatem velit explicabo
                vitae repellendus architecto provident nisi ullam minus
                asperiores commodi! Tenetur, repellat aliquam nihil illo.
              </p>
              <ul className="list-unstyled list-check">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Velit explicabo vitae repellendu</li>
                <li>Repellat aliquam nihil illo</li>
              </ul>

              <p>
                <a href="#" className="btn-cta">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default farm;
