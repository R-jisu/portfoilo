import React from "react";
import styles from "./Contact.module.scss";
function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h2>email : wltn1418@gmail.com</h2>
        <h2>
          github :{" "}
          <a href="https://github.com/R-jisu" target="_blank" rel="noreferrer">
            R-Jisu
          </a>
        </h2>
      </div>
    </>
  );
}

export default Contact;
