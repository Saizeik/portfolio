import Head from "next/head";
import Image from "next/image";
import starrySky from "/public/starrysky.jpg";
import MainTitle from "/components/Header/MainTitle.js";
import Particles from "react-tsparticles";
import Twinkle from "./twinkleStar.jsx";
import { motion } from "framer-motion";

import styles from "/components/Header/Header.module.scss";

function Header() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <div id="header" className={styles.header}>
        <div className={styles.imageColumn}>
          <div className={styles.twinkleStarsContainer}>
            <motion.div
              animate={{ x: 0, y: [-255, 230] }}
              transition={{
                type: "spring",
                bounce: 0.1,
                delay: 3,
                duration: 3,
              }}
            >
              <Twinkle />
            </motion.div>
          </div>
          <div className={styles.spaceManContainer}>
            <motion.div
              animate={{ x: 210, y: [-255, 330] }}
              transition={{
                type: "spring",
                bounce: 0.1,
                delay: 4,
                duration: 3,
              }}
            >
              {" "}
              <Image
                className={styles.Developer}
                src="/spaceman.svg"
                alt="astronaut spaceman"
                height={100}
                width={100}
              />
            </motion.div>
          </div>

          <div className={styles.animationContainer}>
            <Image
              src={starrySky}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              height="700px"
              width="700px"
            />

            <div className={styles.imageContainer}>
              <br></br>
              <motion.div
                animate={{ x: 0, y: [-200, 90] }}
                transition={{ type: "spring", bounce: 0.1 }}
              >
                <object
                  type="image/svg+xml"
                  className={styles.Developer}
                  data="rocketLaunch.svg"
                  alt="Rocket Ship Moving Over The World"
                  height={500}
                  width={500}
                ></object>
              </motion.div>
            </div>
          </div>
        </div>

        <Particles
          style={{ position: "absolute" }}
          params={{
            particles: {
              shape: {
                type: "images",
                image: {
                  src: "react-logo-black.svg",
                },
              },
              number: {
                value: 5,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              opacity: {
                value: 0.2,
              },
              polygon: {
                nb_sides: 15,
              },
              size: {
                value: 30,
              },
              line_linked: {
                enable: false,
              },
            },
          }}
        />
        <div className="header">
          <MainTitle
            className={styles.mainTitle}
            id="mainTitle"
            preserveAspectRatio="none"
            viewBox="0 0 300 200"
          />
          <motion.div
            className={styles.iconsWrapper}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div style={{ display: "flex" }}>
              <motion.div
                className="item-1 item"
                src="html5-logo.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-2 item"
                src="css3-logo.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-3 item"
                src="js-logo-black.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-4 item"
                src="react-logo-black.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-5 item"
                src="node-dot.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-6 item"
                src="redux-logo-black.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-7 item"
                src="sass.svg"
                variants={item}
              ></motion.div>
              <motion.div
                className="item-8 item"
                src="Octicons-mark-github.svg"
                variants={item}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`

.main-title {
    padding: 2rem;
    align-self: "flex-start";
    width: 43.75rem;
  }    
.avatar{
  width: 10rem;
  
  justify-self: center;
  align-self: flex-end;
  z-index: 1;  
  }

  .item {
    width: 40px;
    height: 40px;
    margin: 0.7rem;
  }
  
  .item-1 {
    background: url(/html5-logo.svg) no-repeat;
  }
  
  .item-2 {
    background: url(/css3-logo.svg) no-repeat;
  }
  .item-3 {
    background: url(/js-logo-black.svg) no-repeat;
  }
  .item-4 {
    background: url(/react-logo-black.svg) no-repeat;
  }
  .item-5 {
    background: url(/node-dot.svg) no-repeat;
  }
  .item-6 {
    background: url(/redux-logo-black.svg) no-repeat;
  }
  .item-7 {
    background: url(/sass.svg) no-repeat;
  }
  .item-8 {
    background: url(/public/Octicons-mark-github.svg) no-repeat;
  `}</style>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
export default Header;
