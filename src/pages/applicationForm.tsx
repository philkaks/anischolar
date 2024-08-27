import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../Config/firebase.config";
import React from "react";

const applicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryOfOrigin: "",
    address: "",
    yearOfStudy: "",
    GPA: "",
    CGPA: "",
    preference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "applications"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        countryOfOrigin: "",
        address: "",
        yearOfStudy: "",
        preference: "",
        GPA: "",
        CGPA: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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

      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleSubmit} method="POST">
            <div className="formbold-form-title">
              <h2 className="">Apply for the opportunity</h2>
              <p>
                Apply for our program by filling out the form below. We will get
                back to you as soon as possible.
              </p>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="formbold-form-input"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  type="text"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label">
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  type="text"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="address2" className="formbold-form-label">
                Country of Origin
              </label>
              <input
                id="countryOfOrigin"
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleChange}
                required
                type="text"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="state" className="formbold-form-label">
                  Year of study
                </label>
                <input
                  type="text"
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label htmlFor="country" className="formbold-form-label">
                  Preference
                </label>
                <input
                  type="text"
                  id="preference"
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                  required
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              {/* <div>
                <label htmlFor="post" className="formbold-form-label">
                  GPA
                </label>
                <input
                  type="text"
                  id="GPA"
                  name="GPA"
                  value={formData.GPA}
                  onChange={handleChange}
                  required
                  className="formbold-form-input"
                />
              </div> */}
              <div>
                <label htmlFor="area" className="formbold-form-label">
                  CGPA
                </label>
                <input
                  type="text"
                  id="CGPA"
                  name="CGPA"
                  value={formData.CGPA}
                  onChange={handleChange}
                  required
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-checkbox-wrapper">
              <label
                htmlFor="supportCheckbox"
                className="formbold-checkbox-label"
              >
                <div className="formbold-relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    className="formbold-input-checkbox"
                  />
                  <div className="formbold-checkbox-inner">
                    <span className="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        className="formbold-stroke-current"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          stroke-width="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                I agree to the defined
                <a href="/"> terms, conditions, and policies</a>
              </label>
            </div>

            <button className="formbold-btn">Register Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default applicationForm;
