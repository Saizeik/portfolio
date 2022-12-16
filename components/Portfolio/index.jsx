import React from "react";
import styles from "./Portfolio.module.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

import { content } from "./content";
import Image from "next/image";

library.add(fab);
const twitter = findIconDefinition({ prefix: "fab", iconName: "twitter" });
const facebook = findIconDefinition({ prefix: "fab", iconName: "facebook" });
const reddit = findIconDefinition({ prefix: "fab", iconName: "reddit" });
const linkedin = findIconDefinition({ prefix: "fab", iconName: "linkedin" });

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div id="portfolio" className="container-fluid">
        <h1
          className={styles.h1}
          style={{
            textAlign: "center",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "#3a86ff",
            margin: "4rem 0",
          }}
        >
          Portfolio
        </h1>

        <section className={styles.grid.row}>
          <div className="grid row">
            {content.map((item, key) => (
              <div
                key={key}
                className="col-md-6 col-sm-12 d-flex justify-content-center"
              >
                <figure className={styles.effect}>
                  <a href={item.demo} target="blank">
                    <Image src={item.Image} alt={item.title} />
                  </a>

                  <figcaption>
                    <h2>
                      {item.title}&nbsp;&nbsp;<span>{item.subtitle}</span>
                    </h2>
                    <p className={styles.iconLinks}>
                      <LinkedinShareButton
                        className={styles.shareBtn}
                        url={"https://linkedin.com"}
                        hashtag="#FrontendDeveloper"
                        quote={
                          "This is the text which you want to show when people share your portfolio!"
                        }
                      >
                        <FontAwesomeIcon
                          icon={linkedin}
                          className="fab fa-linkedin"
                        />
                      </LinkedinShareButton>
                      <RedditShareButton
                        className={styles.shareBtn}
                        url={"https://linkedin.com"}
                        quote={
                          "This is the text which you want to show when people share your portfolio!"
                        }
                        hashtag="#FrontedDeveloper"
                      >
                        <FontAwesomeIcon
                          icon={reddit}
                          className="fab fa-reddit"
                        />
                      </RedditShareButton>
                      <TwitterShareButton
                        className={styles.shareBtn}
                        url={"https://twitter.com"}
                        quote={
                          "This is the text which you want to show when people share your portfolio!"
                        }
                        hashtag="#FrontedDeveloper"
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={twitter}
                          className="fab fa-twitter"
                        />
                      </TwitterShareButton>
                      <FacebookShareButton
                        className={styles.shareBtn}
                        url={"https://facebook.com"}
                        quote={
                          "This is the text which you want to show when people share your portfolio!"
                        }
                        hashtag="#FrontedDeveloper"
                      >
                        <FontAwesomeIcon
                          icon={facebook}
                          className="fab fa-facebook"
                        />
                      </FacebookShareButton>
                    </p>
                    <div
                      className={styles.description}
                      style={{ float: "left", padding: "0.5rem 1rem" }}
                    >
                      <span className={styles.demoAndGitHubLinks}>
                        DEMO:
                        <a
                          href={item.demo}
                          target="blank"
                          className={styles.demoLinks}
                        >
                          {item.demo}
                        </a>
                        <br />
                        GITHUB:
                        <a href={item.github} className={styles.demoLinks}>
                          {item.github}
                        </a>
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
