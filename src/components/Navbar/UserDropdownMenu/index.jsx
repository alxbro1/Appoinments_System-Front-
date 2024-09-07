import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCalendarPlus,
  FaReply,
  FaUserTie,
} from "react-icons/fa";

export const UserDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const user = useSelector(state=>state.user.user)

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onMouseDown={handleClickOutside}
      className={styles.wrapper}>
      <div
        className={styles.profile}
        style={{
          backgroundImage:
            'url("https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png")',
        }}
        onClick={handleToggle}>
        {isOpen && (
          <div
            ref={menuRef}
            className={styles.menu}>
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
            <hr />
            <Link to="/perfile/appoinments">
              <FaCalendarAlt /> <span>My Appoinments</span>
            </Link>
            <Link to="/perfile/createappoinment">
              <FaCalendarPlus />
              <span>Create Appoinment </span>
            </Link>
            <Link to="/perfile">
              <FaUserTie /> <span>Perfile</span>
            </Link>
            <a href="/login">
              <FaReply /> <span>Logout</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
