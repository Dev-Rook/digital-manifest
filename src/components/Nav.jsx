import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hooks Import:
import useWindowWidth from "../hooks/useWindowWidth";

// Styles Import:
import styles from "../styles/comp-styles/nav.module.scss";

// Json Import:
import routeData from "../data/routes";

// Component Import:
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [routes, setRoutes] = useState(routeData);
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);

  const { windowWidth } = useWindowWidth();

  const toggleMobileMenu = () => {
    setShow((prev) => !prev);
    console.log("Toggle")
  };

  const profileLink = `https://i.pinimg.com/564x/2e/bf/3f/2ebf3fedb20aaf0235ba11a69e34f7fe.jpg`;

  return (
    <nav className={styles.nav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {auth ? (
          <ul className={styles.navlink_container}>
            {routes?.map((route) => {
              return (
                <li key={route.id}>
                  <Link to={route.route}>{route?.name}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <div onClick={toggleMobileMenu} className={styles.profile_icon}>
          <img src={profileLink} alt="" className={styles.img} />
        </div>
      </div>
      {windowWidth <= 996 ? <MobileMenu show={show} /> : null}
    </nav>
  );
};

export default Nav;
