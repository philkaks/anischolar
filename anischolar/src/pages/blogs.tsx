import { Link } from "react-router-dom";

const blogs = () => {
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">
              Anischolar<span>.</span>
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog</li>
            </ol>
            <h2>Blog</h2>
          </div>
        </section>

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div id="loadingSpinner" className="text-center">
              <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
              </div>
              <p>Loading articles, please wait...</p>
            </div>
            <div className="row" id="blogEntries"></div>
          </div>
        </section>
      </main>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default blogs;
