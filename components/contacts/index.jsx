import React, { useState } from "react";
import styles from "./contacts.module.scss";
//import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import "animate.css";
import envelope from "./envelope.png";
import Image from "next/image";

// EMAILJS
const service_ID = "service_859vvsp";
const template_ID = "template_ilpkg0r";
const user_ID = "user_39Wd73TWkWKHkCy6Ylie5";
const message =
  "The form sent successfuly! I'll contact you as soon as possible!";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, r) => {
    sendEmail(
      service_ID,
      template_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      user_ID
    );
    r.target.reset();
  };

  const sendEmail = (service_ID, template_ID, variables, user_ID) => {
    emailjs
      .send(service_ID, template_ID, variables, user_ID)
      .then(() => setSuccessMessage(`${message}`))
      .catch((err) => console.log(`Somthing went wrong ${err}`));
  };

  return (
    <div id="contacts" className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.formCardGradient}></div>
        <h2>Contact Me</h2>
        <span className={styles.successMessage}>{successMessage}</span>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.textInput}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className={styles.InputError}>This field is required</span>
            )}
          </div>
          <div className={styles.textInput}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <span className={styles.InputError}>
                This field is empty or invalid email format.
              </span>
            )}
          </div>
          <div className={styles.textInput}>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <span className={styles.InputError}>This field is required</span>
            )}
          </div>
          <div className={styles.textArea}>
            <textarea
              type="text"
              className={styles.textArea}
              placeholder="Message"
              name="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className={styles.InputError}>This field is required</span>
            )}
          </div>
          <button id="send" className={styles.button}>
            SEND
          </button>
        </form>
        <Image
          src={envelope}
          className={`${styles.envelope}"animate__animated.animate__rollOut"`}
          id="envelope"
          a
          href="./envelope.png"
          height="150"
          width="150"
        />
      </div>
      <script
        defer
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
      >
        <style>{`
        (function(){
      emailjs.init("user_39Wd73TWkWKHkCy6Ylie5");
    })();
   `}</style>
      </script>
    </div>
  );
};

export default Contacts;
