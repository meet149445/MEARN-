import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  clearCompleted,
  fetchTodos,
  removeTodo,
  selectTodoError,
  selectTodoStats,
  selectTodoStatus,
  selectTodos,
  toggleTodo,
} from "../slices/TodoSlice";
import "./Todo.css";

export default function Todo() {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const status = useSelector(selectTodoStatus);
  const error = useSelector(selectTodoError);
  const stats = useSelector(selectTodoStats);

  const [text, setText] = useState("");

  const canAdd = useMemo(() => text.trim().length > 0, [text]);

  const submitAdd = (e) => {
    e.preventDefault();
    if (!canAdd) return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <section className="todoWrap">
      <h2>Redux Todo Demo</h2>

      <div className="todoStats">
        <span>Total: {stats.total}</span>
        <span>Completed: {stats.completed}</span>
        <span>Remaining: {stats.remaining}</span>
      </div>

      <div className="todoActions">
        <button
          onClick={() => dispatch(fetchTodos())}
          disabled={status === "loading"}
          className="primaryBtn"
        >
          {status === "loading" ? "Loading..." : "Load Sample Todos"}
        </button>

        <button
          onClick={() => dispatch(clearCompleted())}
          disabled={items.every((t) => !t.done)}
          className="ghostBtn"
        >
          Clear Completed
        </button>
      </div>

      {error ? <p className="todoError">{error}</p> : null}

      <form className="todoAdd" onSubmit={submitAdd}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a task (e.g., Order food...)"
        />
        <button type="submit" disabled={!canAdd}>
          Add
        </button>
      </form>

      <ul className="todoList">
        {items.length === 0 ? (
          <li className="empty">No todos yet. Click “Load Sample Todos”.</li>
        ) : (
          items.map((t) => (
            <li className="todoItem" key={t.id}>
              <label className="todoCheck">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => dispatch(toggleTodo(t.id))}
                />
                <span className={t.done ? "doneText" : ""}>{t.text}</span>
              </label>

              <button
                className="removeBtn"
                onClick={() => dispatch(removeTodo(t.id))}
                aria-label={`Remove ${t.text}`}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

