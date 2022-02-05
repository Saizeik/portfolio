import React, { useState, useEffect } from "react";
import styles from "./contacts.module.scss";
import { useForm } from "react-hook-form";
import "animate.css";
import envelope from "./envelope.png";
import emails from "./Email.png";
import littleEmail from "./littleEmail.png";
import Image from "next/image";

// EMAILJS

const service_ID = "service_859vvsp";
const template_ID = "template_ilpkg0r";
const user_ID = "user_39Wd73TWkWKHkCy6Ylie5";
const message =
  "The form sent successfuly! I'll contact you as soon as possible!";

const Contacts = () => {
  const [names, setNames] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const HandleChange = (event) => {
    const value = event.target.value;
    setUseState({
      ...useState,
      [event.target.name]: value,
    });
  };

  const onSubmit = (data, r, event) => {
    sendEmail(
      service_ID,
      template_ID,
      {
        names: data.name,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      user_ID
    );
    r.target.reset();
    console.log("data", data);
    console.log("event", event);
  };

  const onError = () => {
    console.log("wrong");
  };

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    node: "onChange",
    defaultValues: {
      names: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  useEffect(() => {
    window.onload = function () {
      if (typeof window !== "undefined") {
        let forms = document.querySelector("#form");
        let envelope = document.querySelector("#envelope");

        const SentMessage = () => {
          forms.addEventListener("submit", SentMessage);
          envelope.style.visibility = "visible";

          setTimeout(function () {
            envelope.classList.add(
              "animate__animated",
              "animate__lightSpeedOutRight"
            );
          }, 4000);

          setTimeout(function () {
            envelope.classList.remove("animate__animated", "animate__tada");
            envelope.classList.remove(
              "animate__animated",
              "animate__lightSpeedOutRight"
            );
            envelope.style.visibility = "hidden";
          }, 12000);

          setTimeout(function () {
            envelope.classList.add("animate__fadeInBottomRight");
            envelope.classList.add("sendAnimation");
            envelope.style.visibility = "visible";
          }, 15000);
        };
        SentMessage();
      }
    };
  });

  const sendEmail = (service_ID, template_ID, variables, user_ID) => {
    setTimeout(function () {
      emailjs

        .send(service_ID, template_ID, variables, user_ID)
        .then(() => setSuccessMessage(`${message}`))

        .catch((err) => console.log(`Somthing went wrong ${err}`));
    }, 2000);
  };

  return (
    <div id="contacts" className={styles.formWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={emails}
          className={styles.emails}
          id="emails"
          alt="mailbox with mail feeding through"
          a
          href="./Email.png"
          height="300"
          width="300"
        />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formCardGradient}></div>
        <h2>Contact Me</h2>
        <span className={styles.successMessage} id="successMessage">
          {successMessage}
          <Image
            src={envelope}
            className={styles.envelope}
            id="envelope"
            alt="Post Card for send animation"
            a
            href="./envelope.png"
            height="150"
            width="150"
            display="hidden"
          />
        </span>
        <form
          className={styles.form}
          id="form"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className={styles.textInput}>
            <input
              type="name"
              placeholder="Name"
              name="name"
              onChange={HandleChange}
              {...register("name", { required: true, pattern: "[A-Za-z]{3,}" })}
            />
            {errors.name && (
              <span className={styles.InputError}>This field is required</span>
            )}
          </div>
          <div className={styles.textInput}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={HandleChange}
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
              type="subject"
              placeholder="Subject"
              name="subject"
              onChange={HandleChange}
              {...register("subject", {
                required: true,
                pattern: "[A-Za-z]{3,}",
              })}
            />
            {errors.subject && (
              <span className={styles.InputError}>This field is required</span>
            )}
          </div>
          <div className={styles.textArea}>
            <textarea
              type="description"
              className={styles.textArea}
              placeholder="Message"
              name="description"
              onChange={HandleChange}
              {...register("description", {
                required: true,
                pattern: "[A-Za-z]{3,}",
              })}
            />
            {errors.description && (
              <span className={styles.InputError}>This field is required</span>
            )}
          </div>
          <div className={styles.buttonWrapper}>
            <button id="buttons" className={styles.buttons}>
              <div className={styles.send}>
                <Image
                  src={littleEmail}
                  className={styles.littleEmail}
                  id="littleEmail"
                  alt="little email icon"
                  a
                  href="./email.png"
                  height="60"
                  width="60"
                />
              </div>
              <div className={styles.check} id="check"></div>
              <div className={styles.textSend}>SEND </div>
            </button>
          </div>
          <div className={styles.check} id="check"></div>
        </form>
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
