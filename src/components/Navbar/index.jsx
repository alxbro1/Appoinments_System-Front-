import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useScreenSize } from "../../hooks/screenSize";
import { useState } from "react";
import {
  FaRegCommentDots,
  FaUsers,
  FaHome,
  FaAngleRight,
  FaRegTimesCircle,
} from "react-icons/fa";
import { UserDropdownMenu } from "./UserDropdownMenu/index";

export const Navbar = () => {
  const { width } = useScreenSize();
  const user = useSelector((state) => state.user.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className={styles.container}>
      {width < 768 && (
        <button
          onClick={() => {
            return setIsMenuOpen(!isMenuOpen);
          }}>
          <Link to="/home">
            <img
              src="/hamburguerMenu.svg"
              alt=""
            />
          </Link>
        </button>
      )}
      <div style={{ display: "flex" }}>
        <Link to="/home">
          <img src="/IconProjectM3.svg" />
          <h1>
            Mind <br /> Wellnes
          </h1>
        </Link>
        {width >= 768 && (
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>We About</Link>
            </li>
            <li>
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
          </ul>
        )}
      </div>
      {!user.id ? (
        <Link
          to={"/login"}
          className={styles.accessLink}>
          Access
        </Link>
      ) : (
        <UserDropdownMenu />
      )}

      {isMenuOpen && (
        <div
          className={`${styles.dropMenu} ${isMenuOpen ? styles.isOpen : ""}`}>
          <button
            onClick={() => {
              return setIsMenuOpen(setIsMenuOpen(false));
            }}>
            <FaRegTimesCircle />
          </button>
          <h2>My Menu</h2>
          <div className={styles.infoContainer}>
            {user.id ? (
              <>
                <div className={styles.userInfoMenu}>
                  <div>
                    <img
                      src="https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png"
                      alt=""
                    />
                    <div>
                      <h3>{user.name}</h3>
                      <span>{user.email}</span>
                    </div>
                  </div>
                  <span></span>
                </div>
                <div className={styles.userOptions}>
                  <ul>
                    <li>
                      <Link>My Information</Link>
                    </li>
                    <li>
                      <Link>My Appoinments</Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className={styles.userOptions}>
                <ul>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </div>
            )}
            <ul className={styles.linksMenu}>
              <li>
                <Link to="/home">
                  <p>
                    <span>
                      <FaHome />
                    </span>
                    Home
                  </p>
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p>
                    <span>
                      <FaUsers />
                    </span>
                    We About
                  </p>
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p>
                    <span>
                      <FaRegCommentDots />
                    </span>
                    Contact Us
                  </p>
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
