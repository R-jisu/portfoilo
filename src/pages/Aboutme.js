import React from "react";
import styles from "./Aboutme.module.scss";

function Aboutme() {
  return (
    <>
      <div className={styles.flexbox}>
        <video autoPlay muted loop>
          <source src="FireworksSlowMotion.mp4" type="video/mp4" />
        </video>
        <div className={styles.opacitybox}>
          <p className={styles.title}>
            Welcome to my page.
            <br />I am Jisu.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
