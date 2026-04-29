import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { toast, ToastContainer } from "react-toastify";

export default function Signup() {
  const notify = () => {
    toast("Signup successful! Welcome to FoodNest.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (!name || !email || !password) {
      setIsError(true);
      setMessage("Please fill all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("foodnest_users") || "[]");
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setIsError(true);
      setMessage("Account already exists. Please login.");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];

    localStorage.setItem("foodnest_users", JSON.stringify(updatedUsers));
    localStorage.setItem("foodnest_current_user", JSON.stringify(newUser));

    setIsError(false);
    setMessage("Signup successful. Redirecting to home...");
    setFormData({ name: "", email: "", password: "" });
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <main className={styles.authPage}>
      <section className={styles.card}>
        <h1>Create Account</h1>
        <p>Join FoodNest and start ordering amazing meals.</p>

        <form className={styles.form} onSubmit={handleSignup}>
          <label htmlFor="signupName">Full Name</label>
          <input
            id="signupName"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="signupEmail">Email</label>
          <input
            id="signupEmail"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="signupPassword">Password</label>
          <input
            id="signupPassword"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" onClick={notify}>
            Sign Up
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </form>

        {message ? (
          <p
            className={`${styles.message} ${
              isError ? styles.error : styles.success
            }`}
          >
            {message}
          </p>
        ) : null}

        <div className={styles.footerText}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </section>
    </main>
  );
}
