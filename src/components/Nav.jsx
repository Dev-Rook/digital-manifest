import { useState, useRef, useEffect } from "react";
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
  const [auth, setAuth] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hooks
  const { windowWidth } = useWindowWidth();
  // const { scrollUp } = useScrollUp();

  let menuRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  const toggleMobileMenu = () => {
    setShow((prev) => !prev);
  };

  const profileLink = `https://i.pinimg.com/564x/2e/bf/3f/2ebf3fedb20aaf0235ba11a69e34f7fe.jpg`;

  return (
    <nav ref={menuRef} className={styles.nav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {auth ? (
          <ul className={styles.navlink_container}>
            {routes?.map((route) => {
              return (
                <li key={route.id} onClick={toggleMobileMenu}>
                  <Link to={route.route}>{route?.name}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <>{windowWidth <= 996 ? null : <Link to="/login">Login</Link>}</>
        )}
        <div onClick={toggleMobileMenu} className={styles.profile_icon}>
          <img src={profileLink} alt="" className={styles.img} />
        </div>
      </div>
      {windowWidth <= 996 ? (
        <MobileMenu
          show={show}
          toggleMobileMenu={toggleMobileMenu}
          auth={auth}
        />
      ) : null}
    </nav>
  );
};

export default Nav;
