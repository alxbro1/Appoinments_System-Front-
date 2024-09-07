import styles from "./index.module.css";

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          We are a leading provider of quick and accessible mental health
          services. Our goal is to offer comprehensive care, tailored to each
          individual, using modern tools and a compassionate approach. Whether
          it's psychiatric evaluations, therapy sessions, or medication
          management, we strive to bring quality care to your doorstep.
        </p>
        <p>
          With a team of highly skilled professionals, we make sure to guide you
          through every step of your journey. Our platform simplifies the
          process of booking and managing appointments, so you can focus on your
          mental well-being.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src="/medicalteamwork.jpg"
          alt="Our Team"
          className={styles.image}
        />
      </div>
    </section>
  );
};