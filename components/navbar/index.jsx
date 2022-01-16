import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link
                  smooth={true}
                  to="header"
                  className={styles.navLink}
                  href="#"
                  style={{
                    color: `rgba(	16.1, 32.2, 43.9 ${backgroundTransparacy})`,
                    padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
                >
                  <strong>Home</strong>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="about"
                  offset={-55}
                  className={styles.navLink}
                  href="#"
                  style={{
                    color: `rgba(	16.1, 32.2, 43.9 ${backgroundTransparacy})`,
                    padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
                >
                  <strong>About Me</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to="resume"
                  offset={-55}
                  className={styles.navLink}
                  href="#"
                  style={{
                    color: `rgba(	16.1, 32.2, 43.9 ${backgroundTransparacy})`,
                    padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
                >
                  <strong>Resume</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-55}
                  className={styles.navLink}
                  href="#"
                  style={{
                    color: `rgba(	16.1, 32.2, 43.9 ${backgroundTransparacy})`,
                    padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
                >
                  <strong>Portfolio</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="services"
                  offset={-55}
                  className={styles.navLink}
                  href="#"
                  style={{
                    color: `rgba(	16.1, 32.2, 43.9 ${backgroundTransparacy})`,
                    padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
                >
                  <strong>Services</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-55}
                  className={styles.navLink}
                  href="#"
                  style={{
                    backgroundcolor: `rgba(	16.1, 32.2, 43.9 ${backgroundTransparacy})`,
                    padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
                >
                  <strong>Contacts</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
    .nav {
    background: #256;
  }
  
  .nav a.nav-link {
    color: #fff !important;
    font-size: 0.8rem;
    letter-spacing: 0.0375rem;
    cursor: pointer;
  }
  
  .nav ul li {
    text-transform: uppercase;
  }
  
  .navbar-nav > li > a {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    border-top: 0.1875rem solid #256;
  }

  .navbar-nav > li > a:active,
  .navbar-nav > li > a:focus {
    border-top: 0.1875rem solid #4ab !important;
    color: #4ab !important;
  }
  
  .navbar-nav > li > a:hover {
    border-top: 0.1875rem solid #4ab !important;
    color: #4ab !important;
  }
  
  
  `}</style>
    </>
  );
};

export default Navbar;
