import React from "react";
import Nav from "../Component/Nav";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <Nav />
      <section className={styles.wrapper}>
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We would love to hear from you.</p>

        <form className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Write your message..." />
          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}
