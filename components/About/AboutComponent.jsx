import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "/components/About/About.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import MyBackground from "./aboutMe.js"


import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1 className={styles.h1}>ABOUT ME</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className={styles.photoWrapper}>
              <Image
                className="Author"
                src="/Scott.jpg"
                alt="Author"
                height={400}
                width={400}
              />
              <div className={styles.photoOverlay}>
                <div className="photoText social">
                  <h5 style={{ textAlign: "center", color: "#fff" }}>
                    Help me grow, please share!
                  </h5>
                  <>
                    <FacebookShareButton
                      className={styles.iconButton}
                      url={"https://reactjs.org"}
                      quote={
                        "Thank you for sharing! I'm a Front End Developer with expertise in User Interface and Experience design. I love what I do and you will too!"
                      }
                      hashtag="#FrontendDeveloper"
                    >
                      <FacebookIcon className="icon" size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      className={styles.iconButton}
                      url={"https://reactjs.org"}
                      quote={
                        "Thank you for sharing! I'm a Front End Developer with expertise in User Interface and Experience design. I love what I do and you will too!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <TwitterIcon className="icon" size={32} round={true} />
                    </TwitterShareButton>
                    <TelegramShareButton
                      className={styles.iconButton}
                      url={"https://twitter.com/Tygruss_Saizeik"}
                      quote={
                        "Thank you for sharing! I'm a Front End Developer with expertise in User Interface and Experience design. I love what I do and you will too!"
                      }
                      hashtag="#FrontendDeveloper"
                    >
                      <TelegramIcon className="icon" size={32} round={true} />
                    </TelegramShareButton>
                    <RedditShareButton
                      className={styles.iconButton}
                      url={"https://reactjs.org"}
                      quote={
                        "Thank you for sharing! I'm a Front End Developer with expertise in User Interface and Experience design. I love what I do and you will too!"
                      }
                      hashtag="#FrontendDeveloper"
                    >
                      <RedditIcon className="icon" size={32} round={true} />
                    </RedditShareButton>
                    <LinkedinShareButton
                      className={styles.iconButton}
                      url={"https://www.linkedin.com/in/scott-walker04/"}
                      quote={
                        "Thank you for sharing! I'm a Front End Developer with expertise in User Interface and Experience design. I love what I do and you will too!"
                      }
                      hashtag="#FrontendDeveloper"
                    >
                      <LinkedinIcon className="icon" size={32} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                      className={styles.iconButton}
                      url={"https://reactjs.org"}
                      quote={
                        "Thank you for sharing! I'm a Full Stack Developer with expertise in User Interface and Experience design. I love what I do and you will too!"
                      }
                      hashtag="#FrontendDeveloper"
                    >
                      <WhatsappIcon className="icon" size={32} round={true} />
                    </WhatsappShareButton>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 about-right">
            <>
              <h4>
               <MyBackground /> 
              </h4>
            </>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
