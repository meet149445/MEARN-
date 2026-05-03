import styles from './App.module.css'
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    } else if (field === "age") {
      setAge(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, password, age };

    try {
      const res = await axios.post("http://127.0.0.1:3000/registration", payload);
      console.log("✅ Response:", res.data);
    } catch (err) {
      console.log("❌ Error:", err.message);
    }
  };

  return (
    <div className={styles.App}>
      {/* ✅ onSubmit moved here */}
      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.items}>
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>

        <div className={styles.items}>
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" id="email" onChange={handleChange} />
        </div>

        <div className={styles.items}>
          <label htmlFor="password">Password :</label>
          <input type="text" name="password" id="password" onChange={handleChange} />
        </div>

        <div className={styles.items}>
          <label htmlFor="age">Age :</label>
          <input type="text" name="age" id="age" onChange={handleChange} />
        </div>

        <div className={styles.items}>
          <button type="submit" className={styles.btn}>Submit</button>
        </div>

      </form>
    </div>
  );
}