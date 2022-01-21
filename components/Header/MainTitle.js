import React, { useEffect } from "react";
import Vivus from "vivus";
import styles from "/components/Header/Header.module.scss";

const MainTitle = () => {
  useEffect(() => {
    new Vivus("main-title", {
      duration: 200,
      file: "svg/main-title_animated.svg",
    });
  }, []);
  return <div className={styles.mainTitle} id="main-title"></div>;
};

export default MainTitle;
