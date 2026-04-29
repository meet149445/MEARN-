import React from "react";
import Nav from "../Component/Nav";
import styles from "./Home.module.css";

const categories = [
  { title: "Burgers", text: "Juicy grilled burgers with fresh toppings." },
  { title: "Pizza", text: "Stone-baked pizzas with rich cheese and sauces." },
  { title: "Healthy Bowls", text: "Fresh salads and bowls for a light meal." },
];

const specials = [
  { name: "Classic Cheese Burger", price: "$8.99" },
  { name: "Farmhouse Pizza", price: "$12.49" },
  { name: "Peri Peri Fries", price: "$4.99" },
  { name: "Chocolate Shake", price: "$3.99" },
];

export default function Home() {
  return (
    <main className={styles.home} id="home">
      <Nav />

      <section className={styles.hero}>
        <div>
          <p className={styles.tag}>Fresh. Fast. Delicious.</p>
          <h1>Discover The Best Food In Your City</h1>
          <p className={styles.subtitle}>
            From quick bites to full meals, get your favorite dishes delivered
            hot and fresh at your doorstep.
          </p>
          <div className={styles.heroBtns}>
            <button className={styles.primaryBtn}>Explore Menu</button>
            <button className={styles.secondaryBtn}>Book a Table</button>
          </div>
        </div>
        <div className={styles.heroCard}>
          <h3>Today&apos;s Offer</h3>
          <p>Get 25% OFF on your first order above $20.</p>
          <button>Claim Offer</button>
        </div>
      </section>

      <section className={styles.section} id="menu">
        <h2>Popular Categories</h2>
        <div className={styles.grid3}>
          {categories.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="offers">
        <h2>Chef Specials</h2>
        <div className={styles.specialList}>
          {specials.map((item) => (
            <div className={styles.specialItem} key={item.name}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <h2>Ready to order your favorite meal?</h2>
        <p>Fast delivery, quality ingredients, and unbeatable taste.</p>
        <button className={styles.primaryBtn}>Order Now</button>
      </section>
    </main>
  );
}
