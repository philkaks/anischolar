import { Link } from "react-router-dom";
import logo from "../assets/img/logo2.png";
import { useEffect } from "react";
import React from "react";
import { useAuth } from "../authProvider";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const navbar = document.querySelector("#navbar") as HTMLElement;
    const toggleButton = document.querySelector(
      ".mobile-nav-toggle"
    ) as HTMLElement;

    const mobileNavToggle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.matches(".mobile-nav-toggle")) {
        if (navbar) {
          navbar.classList.toggle("navbar-mobile");
        }
        target.classList.toggle("bi-list");
        target.classList.toggle("bi-x");
      } else {
        const isClickInsideNavbar = navbar.contains(target);
        const isClickOnToggleButton = toggleButton.contains(target);

        if (
          !isClickInsideNavbar &&
          !isClickOnToggleButton &&
          navbar.classList.contains("navbar-mobile")
        ) {
          navbar.classList.remove("navbar-mobile");
          toggleButton.classList.remove("bi-x");
          toggleButton.classList.add("bi-list");
        }
      }
    };

    document.addEventListener("click", mobileNavToggle);

    return () => {
      document.removeEventListener("click", mobileNavToggle);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const navbarlinksActive = () => {
    const navbarLinks = document.querySelectorAll(
      "#navbar .scrollto"
    ) as NodeListOf<HTMLElement>;

    navbarLinks.forEach((navbarLink) => {
      const sectionId = navbarLink.getAttribute("href");

      if (sectionId) {
        const section = document.querySelector(sectionId) as HTMLElement | null;
        if (section) {
          const position = window.scrollY + 200;

          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarLink.classList.add("active");
          } else {
            navbarLink.classList.remove("active");
          }
        }
      }
    });
  };

  window.addEventListener("load", navbarlinksActive);
  window.addEventListener("scroll", navbarlinksActive);

  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a>
              <img src={logo} alt="" className="img-fluid"></img>
            </a>
          </div>
          <nav id="navbar" className="mobile-view navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="#hero">
                  Home
                </a>
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
                <Link className="text-decoration-none" to="/blogs">
                  Blog
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              {isLoggedIn ? (
                <li>
                  <button
                    className="btn text-decoration-none getstarted"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="text-decoration-none getstarted">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
        <div className="blue-bar">
        {/* Blue bar content */}
      </div>
      <div className="yellow-bar">
        {/* Content goes here  */}
      </div>
      </header>

      
    </div>
  );
};

export default Navbar;
