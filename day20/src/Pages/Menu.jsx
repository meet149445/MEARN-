import React from "react";
import Nav from "../Component/Nav";
import styles from "./Menu.module.css";

const foodItems = [
  { id: 1, name: "Classic Cheeseburger", category: "Burger", price: "$8.99", rating: 4.6 },
  { id: 2, name: "Double Chicken Burger", category: "Burger", price: "$10.49", rating: 4.7 },
  { id: 3, name: "Margherita Pizza", category: "Pizza", price: "$11.99", rating: 4.5 },
  { id: 4, name: "Farmhouse Pizza", category: "Pizza", price: "$12.99", rating: 4.8 },
  { id: 5, name: "Veggie Supreme Pizza", category: "Pizza", price: "$13.49", rating: 4.4 },
  { id: 6, name: "Spicy Peri Peri Fries", category: "Sides", price: "$4.99", rating: 4.3 },
  { id: 7, name: "Loaded Nachos", category: "Sides", price: "$6.49", rating: 4.5 },
  { id: 8, name: "Paneer Tikka Wrap", category: "Wrap", price: "$7.99", rating: 4.4 },
  { id: 9, name: "Chicken Shawarma Wrap", category: "Wrap", price: "$8.49", rating: 4.6 },
  { id: 10, name: "Greek Salad Bowl", category: "Salad", price: "$7.49", rating: 4.2 },
  { id: 11, name: "Caesar Salad Bowl", category: "Salad", price: "$7.99", rating: 4.3 },
  { id: 12, name: "Creamy Alfredo Pasta", category: "Pasta", price: "$9.99", rating: 4.5 },
  { id: 13, name: "Arrabbiata Pasta", category: "Pasta", price: "$9.49", rating: 4.4 },
  { id: 14, name: "Grilled Chicken Steak", category: "Main Course", price: "$14.99", rating: 4.7 },
  { id: 15, name: "Veg Sizzler Platter", category: "Main Course", price: "$13.99", rating: 4.5 },
  { id: 16, name: "Chocolate Brownie", category: "Dessert", price: "$5.49", rating: 4.8 },
  { id: 17, name: "Blueberry Cheesecake", category: "Dessert", price: "$5.99", rating: 4.7 },
  { id: 18, name: "Cold Coffee", category: "Beverage", price: "$3.99", rating: 4.4 },
  { id: 19, name: "Fresh Lime Soda", category: "Beverage", price: "$2.99", rating: 4.2 },
  { id: 20, name: "Mango Smoothie", category: "Beverage", price: "$4.49", rating: 4.6 },
];

export default function Menu() {
  return (
    <main className={styles.menuPage}>
      <Nav />

      <section className={styles.hero}>
        <h1>Our Delicious Menu</h1>
        <p>Choose from our freshly prepared dishes and drinks.</p>
      </section>

      <section className={styles.menuGrid}>
        {foodItems.map((item) => (
          <article className={styles.card} key={item.id}>
            <div className={styles.cardTop}>
              <span className={styles.category}>{item.category}</span>
              <span className={styles.rating}>⭐ {item.rating}</span>
            </div>
            <h3>{item.name}</h3>
            <div className={styles.cardBottom}>
              <strong>{item.price}</strong>
              <button>Add</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
