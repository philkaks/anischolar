/* eslint-disable @typescript-eslint/no-unused-vars */
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Config/firebase.config";

const blogs = () => {
  interface MyData{
    id: string;
    title: string;
    author: string;
    authorTitle: string;
    image: string;
    description: string;
    date: Date
  }
  const [blogList, setBlogList] = useState<MyData[]>([]);

  const blogsCollection = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getDocs(blogsCollection);
        
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogList(filteredData);
      } catch (err) {
        console.log("my error", err);
      }
    }


    getBlogs();
  }, []);

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

            {blogList.map((blog) => (
              <article className="entry" key={blog.id} data-aos="fade-up">
              <div className="entry-img" >
                <img
                  // [src]=["{blog.image}"]
                  className="img-fluid"
                />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html?title=${encodeURIComponent(blog.title)}&author=${encodeURIComponent(blog.author)}&date=${encodeURIComponent(blog.date)}&content=${encodeURIComponent(blog.body)}&teaser=${encodeURIComponent(blog.teaser)}&image=${encodeURIComponent(blog.image)}&quote=${encodeURIComponent(blog.blockquote)}">
                  {blog.title}
                </a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i>{" "}
                    <a href="#">{blog.author}</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i>{" "}
                    <a href="#">
                      <time dateTime="{blog.date}">
                        {new Date(blog.date).toDateString()}
                      </time>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                {/* <p>{blog.teaser}</p> */}
                <div className="read-more">
                  <a href="blog-single.html?title=${encodeURIComponent(blog.title)}&author=${encodeURIComponent(blog.author)}&date=${encodeURIComponent(blog.date)}&content=${encodeURIComponent(blog.body)}&teaser=${encodeURIComponent(blog.teaser)}&image=${encodeURIComponent(blog.image)}&quote=${encodeURIComponent(blog.blockquote)}&paragraph2=${encodeURIComponent(blog.paragraph2)}&subtitle=${encodeURIComponent(blog.subtitle)}">
                    Read More
                  </a>
                </div>
              </div>
            </article>
            ))}
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
