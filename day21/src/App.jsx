import React from 'react'
import Counter from './component/Counter'
import Todo from './component/Todo'

export default function App() {
  return (
    <div style={{ padding: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Counter />
      <Todo />
    </div>
  )
}
