import React from "react";
import Nav from "../Component/Nav";
import styles from "./About.module.css";

const highlights = [
  "Fresh ingredients sourced daily from trusted local vendors.",
  "Expert chefs crafting recipes with taste and quality in mind.",
  "Fast and hygienic delivery with customer-first service.",
];

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <Nav />
      <section className={styles.hero}>
        <h1>About FoodNest</h1>
        <p>
          FoodNest is built for food lovers who want delicious meals, quick
          delivery, and a memorable dining experience every time.
        </p>
      </section>

      <section className={styles.content}>
        <h2>Why People Love Us</h2>
        <div className={styles.cards}>
          {highlights.map((item) => (
            <article className={styles.card} key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
