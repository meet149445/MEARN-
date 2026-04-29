import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");

  const handleAdd = () => {
    if (!name || !income) return;
    // Adding the new user to the array
    setUsers([...users, { id: Date.now(), name, income: Number(income) }]);
    setName("");
    setIncome("");
  };

  // Simple sorting logic
  const sortAlpha = () => setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  const sortMoney = () => setUsers([...users].sort((a, b) => b.income - a.income));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Minimal User List</h2>
      
      {/* Input Section */}
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Income" type="number" value={income} onChange={e => setIncome(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {/* Action Buttons */}
      <div style={{ margin: "10px 0" }}>
        <button onClick={sortAlpha}>Sort by Name</button>
        <button onClick={sortMoney}>Sort by Income</button>
      </div>

      {/* Simple List Display */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - ${user.income}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;