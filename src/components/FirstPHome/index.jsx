import { Link } from "react-router-dom";
import style from "./index.module.css";
import { FaBrain, FaComments, FaPills, FaUsers } from "react-icons/fa";
import { Footer } from "../Footer";

export const FirstPHome = () => {
  return (
    <>
      <div className={style.container1}>
        <div className={style.secondaryContainer1}>
          <h2>Get Quick</h2>
          <h1>Medical Services</h1>
          <p>
            Access fast and convenient medical services with just a few clicks.
            Our commitment is to provide you with quality care, whenever and
            wherever you need it. From virtual consultations to scheduling
            in-person appointments, we connect you with highly qualified
            healthcare professionals to ensure your well-being.
          </p>
          <Link to="/register">Get An Account</Link>
          <div>
            <img
              src="/planteritaDelOrtoRecurso.svg"
              alt=""
            />
          </div>
        </div>
        <div className={style.secondaryContainer2}>
          <img
            className={style.firstImage}
            src="/psicologyFirstImageRecurso.svg"
            alt=""
          />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.secondaryContainer3}>
          <img
            src="/imageScreenshoot.png"
            alt=""
          />
        </div>
        <div className={style.secondaryContainer4}>
          <h3>Schedule an Manage</h3>
          <h2>Your appoinments Here and Now</h2>
          <p>
            Stay organized and ensure timely care with our easy-to-use
            scheduling tools, available anytime, anywhere.
          </p>
        </div>
      </div>
      <div className={style.container3}>
        <h2>Our Services</h2>
        <p>Comprehensive Mental Health Care Tailored to Your Needs</p>
        <div className={style.gridCardsContainer}>
          <div className={style.medicareCard}>
            <FaBrain className={style.iconCard} />
            <h3>Comprehensive Psychiatric Evaluations</h3>
          </div>
          <div className={style.medicareCard}>
            <FaUsers className={style.iconCard} />
            <h3>Individual and Group Therapy</h3>
          </div>
          <div className={style.medicareCard}>
            <FaPills className={style.iconCard} />
            <h3>Psychiatric Medication Management</h3>
          </div>
          <div className={style.medicareCard}>
            <FaComments className={style.iconCard} />
            <h3>Cognitive Behavioral Therapy (CBT)</h3>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
