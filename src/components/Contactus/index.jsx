import styles from "./index.module.css";

export const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.content}>
        <h2>Contact Us</h2>
        <p>
          Have any questions or need assistance? We're here to help! Reach out
          to us through any of the methods below, and a member of our team will
          get back to you as soon as possible.
        </p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
            />
          </div>
          <textarea
            placeholder="Your Message"
            className={styles.textarea}></textarea>
          <button
            type="submit"
            className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
