import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
function Nav({ pathname }) {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Portfolio</h2>
        <ul className={styles.nav_ul}>
          <Link to="/">
            <li className={pathname === "/" ? styles.Active : styles.notActive}>
              About Me
            </li>
          </Link>
          <Link to="/skills">
            <li
              className={
                pathname === "/skills" ? styles.Active : styles.notActive
              }
            >
              Skills
            </li>
          </Link>
          <Link to="/works">
            <li
              className={`${styles.submenu} ${
                pathname === "/works" ? styles.Active : styles.notActive
              }`}
            >
              Works
              <ul className={styles.second_li}>
                <li>project1</li>
                <li>project2</li>
                <li>project3</li>
              </ul>
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={
                pathname === "/contact" ? styles.Active : styles.notActive
              }
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
