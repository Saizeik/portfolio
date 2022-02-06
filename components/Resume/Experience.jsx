import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "/components/Resume/Resume.module.scss";
import Image from "next/image";
import experience from "./experience.png";
import education from "./education.png";
import "animate.css";

const Experience = () => {
  return (
    <div className={styles.resumeMainWrapper}>
      <section className="container-fluid">
        <div id="resume" className={styles.container}>
          <div className="row d-flex">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className={styles.resume}>
                <div className="my-5">
                  <h1 className={styles.h1}>education</h1>
                </div>
                <div className={styles.educationImageWrapper}>
                  <Image
                    src={education}
                    className={styles.education}
                    id="educationApple"
                    alt="clip art of an apple"
                    a
                    href="./education.png"
                    height="100"
                    width="100"
                  />
                </div>
                <div className={styles.container.wrapper}>
                  <div className={styles.timelineBlock}>
                    <div className={styles.marker}></div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.resume.h3}>NuCamp</h3>
                      <h5 className={styles.resume.h5}>
                        HTML, CSS, and JavaScript
                      </h5>
                      <h6 className={styles.resume.h6}>2021</h6>
                      <p className={styles.p}>
                        Front-End Web Develoment education in HTML, CSS and
                        JavaScript fundamentals and Advanced JavaScript.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.container.wrapper}>
                  <div className={styles.timelineBlock}>
                    <div className={styles.marker}></div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.resume.h3}>NuCamp</h3>
                      <h5 className={styles.resume.h5}>
                        Front End Web + Mobile Developer
                      </h5>
                      <h6 className={styles.resume.h6}>2021</h6>
                      <p className={styles.p}>
                        Responsive Web With Front-End Web UI Framework, Front
                        End JavaScript Library, React Multiplatform Mobile App
                        Development with React Native and Expo Go Visual Studio
                        Code, Packaging and Compiling, Git and GitHub.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.container.wrapper}>
                  <div className={styles.timelineBlock}>
                    <div className={styles.marker}></div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.resume.h3}>NuCamp</h3>
                      <h5 className={styles.resume.h5}>
                        Full Stack Web Development
                      </h5>
                      <h6 className={styles.resume.h6}>2021</h6>
                      <p className={styles.p}>
                        Back End with NodeJS, Databases and Storage, Web
                        Application Architecture
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.container.wrapper}>
                  <div className={styles.timelineBlock}>
                    <div className={styles.marker}></div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.resume.h3}>Frontend Masters</h3>
                      <h5 className={styles.resume.h5}>
                        Career Ready Web Developer
                      </h5>
                      <h6 className={styles.resume.h6}>2021</h6>
                      <p className={styles.p}>
                        Intro to Web Development, CSS Grid and Flexbox
                        Responsive Layouts, JavaScript: From Fundamentals to
                        Functional JS, Web Accessibility, Modern Search Engine
                        Optimization SEO, Dev Tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT COLOMN */}
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className={styles.resume}>
                <div className="my-5">
                  <h1 className={styles.h1}>Experience</h1>
                </div>
                <div className={styles.experienceImageWrapper}>
                  <Image
                    src={experience}
                    className={styles.experienceBriefCase}
                    id="experienceBriefCase"
                    alt="Strapped Briefcase"
                    a
                    href="./experience.png"
                    height="100"
                    width="100"
                  />
                </div>

                <div className={styles.container.wrapper}>
                  <div className={styles.timelineBlock}>
                    <div className={styles.marker}></div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.resume.h3}>NuCamp</h3>
                      <h5 className={styles.resume.h5}>
                        Campsite Portfolio Project-MongoDB, Express, React,
                        React Native, Node
                      </h5>
                      <h6 className={styles.resume.h6}>2021</h6>
                      <p className={styles.p}>
                        Over the course of 22 weeks a complete website was
                        developed, involving frontend and backend, a mobile app
                        designed for the mobile user using React-Native. A
                        backend server was built using MongoDB and Express to
                        handle fetching and storing data. A user can schedule a
                        campsite reservation, post and view comments, and give a
                        rating based on their experience at the campsite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
