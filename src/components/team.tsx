import image1 from '../assets/img/team/1.jpeg'
import image2 from '../assets/img/team/2.jpeg'
import image3 from '../assets/img/team/3.jpeg'
import React from "react";



const team = () => {
  return (
    <div>
      <section id="team">
        <section className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Team</h2>
              <p>
                United by a passion for fostering opportunities and growth in
                the veterinary community.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src={image1} className="img-fluid" alt=""></img>
                    <div className="social">
                      <a href="https://twitter.com/JLuswabi">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="https://www.bing.com/ck/a?!&&p=e43fe9aa1c080bffJmltdHM9MTcwOTA3ODQwMCZpZ3VpZD0zMTEwY2U3Yy0wOWE4LTY3MjQtMWVlNC1kZGM4MDgyZjY2MWUmaW5zaWQ9NTI3Mw&ptn=3&ver=2&hsh=3&fclid=3110ce7c-09a8-6724-1ee4-ddc8082f661e&psq=luswabi+joseph&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzEwMDA2MzY2MjY5NTQ0NC92aWRlb3MvbHVzd2FiaS1qb3NlcGgtYS1za2lsbGVkLXRlYW0tbGVhZC1hdC1hbWFydWxhLXByb3RlZW4taGlnaGxpZ2h0cy10aGUtcmVtYXJrYWJsZS0vNjQxMzEyNTI0NTc1MDgxLw&ntb=1">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/joseph-luswabi-a2701a19a/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Luswabi Joseph</h4>
                    <span>Team Lead</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src={image2} className="img-fluid" alt=""></img>
                    <div className="social">
                      <a href="https://www.bing.com/ck/a?!&&p=e3d583c1c5b342abJmltdHM9MTcwOTA3ODQwMCZpZ3VpZD0zMTEwY2U3Yy0wOWE4LTY3MjQtMWVlNC1kZGM4MDgyZjY2MWUmaW5zaWQ9NTE4NA&ptn=3&ver=2&hsh=3&fclid=3110ce7c-09a8-6724-1ee4-ddc8082f661e&psq=aketch+Olivia+Evans&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FrZXRjaC5vbGl2aWFldmFucy8&ntb=1">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/olivia-aketch-87779b204/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Aketch Olivia</h4>
                    <span>Chief Operations Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src={image3} className="img-fluid" alt=""></img>
                    <div className="social">
                      <a href="https://twitter.com/p_kakuyo">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="https://github.com/philkaks/">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/philipkakuyo/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Kakuyo Philip</h4>
                    <span>Chief Technical Officer </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default team
