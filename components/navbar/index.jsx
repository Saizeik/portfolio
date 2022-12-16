import React from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <Link
                    smooth={true}
                    to="header"
                    className={styles.navLink}
                    href="#"
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
                  >
                    <strong>Contacts</strong>
                  </Link>
                </li>
              </ul>
            </div>
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
    border-top: #3a86ff
  }

  .navbar-nav > li > a:active,
  .navbar-nav > li > a:focus {
    border-top: 0.1875rem solid #fff !important;
    border-bottom: 0.1875rem solid #fff !important;
    
    color: #3a86ff !important;
  }
  
  .navbar-nav > li > a:hover {
    border-top: 0.1875rem solid #3a86ff !important;
    color: #ffff !important;
  }
  
  
  `}</style>
    </>
  );
};

export default Navbar;
