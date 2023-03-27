import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Portfolio</h2>
        <ul className={styles.nav_ul}>
          <Link to="/">
            <li>About Me</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/works">
            <li className={styles.submenu}>
              Works
              <ul className={styles.second_li}>
                <li>project1</li>
                <li>project2</li>
                <li>project3</li>
              </ul>
            </li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
