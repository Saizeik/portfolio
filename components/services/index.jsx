import React from "react";
import { servicesContent } from "./servicesContent";
import styles from "./Services.module.scss";
import Counter from "/components/counter/index.jsx";
const Services = () => {
  return (
    <div id="services" className={`${styles.servicesContainer}container-fluid`}>
      <div className={styles.mainServicesWrapper}>
        <div className="container my-5">
          <div className={styles.servicesWrapper}>
            <h1 className={styles.h1}>My Services</h1>
            <div className={styles.servicesRow}>
              <div className="row">
                {servicesContent.map((item, key) => (
                  <div className="col-md-4 col-sm-12" key={key}>
                    <div className={styles.serviceBox}>
                      <div className={`${styles.card} "card bg-light mb-3"`}>
                        <h5 className={styles.title}>{item.title}</h5>
                        <p className={styles.description}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Services;
