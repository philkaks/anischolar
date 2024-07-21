import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";

const internships = () => {
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
              <div className="card shadow card-body">
                <div className="d-flex mb-4 align-items-center">
                  <div>
                    <h5 className="card-title mb-1">Livestock Veterinarian</h5>
                    <p className="text-muted mb-0">
                      <strong>Supervisor: </strong>Oliver Phillips
                    </p>
                  </div>
                </div>
                <p className="card-text mb-1">
                  <strong>Farm: </strong>Green Valley Farms
                </p>
                <h6 className="mb-3">
                  Available Slots:
                  <span className="badge bg-primary-subtle text-primary  badge-border">
                    20
                  </span>
                </h6>
                <a
                  href="javascript:void(0)"
                  className="btn bg-success text-white"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default internships;
