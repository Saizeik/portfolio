import React from "react";
import styles from "/components/footer/footer.module.scss";
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="container-fluid footer text-center py-2">
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className="row py-3">
            <div className="col-md-3 col-sm-12 link-container">
              <ul className={styles.ul}>
                <li className={styles.li}>
                <Link smooth={true} to='header' className='nav-link' href='#'><strong>
                Home</strong> <span className='sr-only'>(current)</span>
              </Link>
                </li>
                <li className={styles.li}>
                <Link
                smooth={true}
                to='about'
                offset={-55}
                className='nav-link'
                href='#'
              ><strong>
                About</strong>
              </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 link-container">
              <ul className={styles.ul}>
                <li className={styles.li}>
                <Link
                smooth={true}
                to='contacts'
                offset={-55}
                className='nav-link'
                href="#"
              ><strong>
                Contact</strong>
              </Link>
                </li>
                <li className={styles.li}>
                <Link
                smooth={true}
                to='portfolio'
                offset={-55}
                className='nav-link'
                href='#'
              ><strong>
                Portfolio</strong>
              </Link>
                </li>
              </ul>
            </div>
            
            
          </div>
        </div>
        <span className ={styles.company}
          style={{  color: "#FFF" }}
        >{`Nathan Walker Productions | All Rights Reserved ©${new Date().getFullYear()}`}</span>
      </footer>
    </div>
  );
};

export default Footer;



