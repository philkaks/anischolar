import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png"
import { useEffect } from "react";

const navbar = () => {
  const scrollto = (el: string) => {
    const header = document.querySelector("#header") as HTMLElement | null;
    if (!header) return;

    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    const element = document.querySelector(el) as HTMLElement | null;
    if (!element) return;

    const elementPos = element.offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };
   const handleScroll = () => {
     const header = document.querySelector("#header") as HTMLElement | null;
     if (!header) return;

     if (window.scrollY > 100) {
       header.classList.add("header-scrolled");
     } else {
       header.classList.remove("header-scrolled");
     }
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <div>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Gallery
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#contact">
                  Talk To Us
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default navbar
