import { BsTwitterX } from "react-icons/bs";
import "./index.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Footer = () => {
  const userId = useSelector((state) => state.user.user.id);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          {!userId ? (
            <div className="footer-col">
              <h4>Access</h4>
              <ul>
                <li>
                  <Link to="/login">LogIn</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="footer-col">
              <h4>Perfile</h4>
              <ul>
                <li>
                  <Link to="/perfile">My perfile</Link>
                </li>
                <li>
                  <Link to="/perfile/appoinments">My Appoinments</Link>
                </li>
                <li>
                  <Link to="/perfile/createappoinment">Create Appoinment</Link>
                </li>
              </ul>
            </div>
          )}

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=61559924325575"
                target="_blank">
                <FaFacebookF />
              </a>
              <a href="#">
                <BsTwitterX />
              </a>
              <a
                href="https://www.instagram.com/alexander_sauro/"
                target="_blank">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/alexander-sauro-53440224a/"
                target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            color: "rgba(245, 245, 245, 0.5)",
            marginTop: "2rem",
            width: "100%",
            justifyContent: "start",
          }}>
          Copyright © 2024, All Right Reserved
        </div>
      </div>
    </footer>
  );
};
