import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>FoodNest</div>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link className={styles.orderBtn} to="/login">
        Login
      </Link>
    </header>
  );
}
