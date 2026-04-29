import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (!email || !password) {
      setIsError(true);
      setMessage("Please enter email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("foodnest_users") || "[]");
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      setIsError(true);
      setMessage("Invalid credentials. Please try again.");
      return;
    }

    localStorage.setItem("foodnest_current_user", JSON.stringify(matchedUser));
    setIsError(false);
    setMessage("Login successful. Redirecting to home...");
    setFormData({ email: "", password: "" });
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <main className={styles.authPage}>
      <section className={styles.card}>
        <h1>Welcome Back</h1>
        <p>Login to continue exploring your favorite food.</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <label htmlFor="loginEmail">Email</label>
          <input
            id="loginEmail"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="loginPassword">Password</label>
          <input
            id="loginPassword"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>

        {message ? (
          <p className={`${styles.message} ${isError ? styles.error : styles.success}`}>
            {message}
          </p>
        ) : null}

        <div className={styles.footerText}>
          New to FoodNest? <Link to="/signup">Create account</Link>
        </div>
      </section>
    </main>
  );
}
