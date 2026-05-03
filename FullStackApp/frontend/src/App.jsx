import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: ""
  });

  const [users, setUsers] = useState([]);

  // 🔹 handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/registration", form);

      // 🔥 refresh list after submit
      fetchUsers();

      // clear form
      setForm({
        name: "",
        email: "",
        password: "",
        age: ""
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User App</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <br />

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <br />

        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <br />

        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* USERS LIST */}
      <h2>All Users</h2>

      {users.map((user) => (
        <div key={user._id} style={{ marginBottom: "10px" }}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Age:</b> {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}