import React from "react";
import Nav from "../Component/Nav";
import styles from "./Offers.module.css";

const offers = [
  { title: "Weekend Combo", detail: "Buy 1 Pizza and get 1 Cold Drink free." },
  { title: "Family Feast", detail: "Flat 20% off on orders above $35." },
  { title: "Burger Blast", detail: "Get fries free with every burger." },
  { title: "Student Special", detail: "15% off with valid student ID." },
];

export default function Offers() {
  return (
    <main className={styles.offersPage}>
      <Nav />
      <section className={styles.hero}>
        <h1>Exclusive Offers</h1>
        <p>Grab the best deals and enjoy your favorite meals for less.</p>
      </section>

      <section className={styles.offerGrid}>
        {offers.map((offer) => (
          <article className={styles.card} key={offer.title}>
            <h3>{offer.title}</h3>
            <p>{offer.detail}</p>
            <button>Claim Now</button>
          </article>
        ))}
      </section>
    </main>
  );
}
