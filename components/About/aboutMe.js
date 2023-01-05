import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypingEffect from "./typeWriter.js";
import Typewriter from "typewriter-effect";
import styles from "/components/About/About.module.scss";

const MyBackground = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const typeWriter = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0,
      },
    },
  };

  const me = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 4.5,
      },
    },
  };
 

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ type: "spring", bounce: 0.1 }}
        variants={typeWriter}
      >
        <TypingEffect />
      </motion.div>
     
      <div className={styles.aboutMeContainer}>
       
        <p className={styles.p}>
          
            Creative Front End Web Development is my love and passion! My
            background is providing detailed web and app solutions for diverse
            organizations in the industry. Skilled in User Interface and
            Experience UI/UX and have established a strong foundation in
            MongoDB, Express, React, NodeJS. Experienced in providing customized
            solutions within the Shopify realm for small business clients.
    
        </p>
        </div>
      
      
      
    </>
  );
};
export default MyBackground;
