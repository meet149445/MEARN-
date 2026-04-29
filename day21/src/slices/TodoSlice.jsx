import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

// Simulate an API call and return todo data.
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  // Optional cache to make the demo feel faster.
  const cached = localStorage.getItem("redux_demo_todos");
  if (cached) return JSON.parse(cached);

  const sample = [
    { id: nanoid(), text: "Order a pizza", done: false },
    { id: nanoid(), text: "Add fries to your cart", done: true },
    { id: nanoid(), text: "Try a new burger today", done: false },
    { id: nanoid(), text: "Check today’s offers", done: false },
  ];

  // Fake network delay.
  await new Promise((resolve) => setTimeout(resolve, 700));
  localStorage.setItem("redux_demo_todos", JSON.stringify(sample));
  return sample;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: { id: nanoid(), text, done: false },
        };
      },
    },
    toggleTodo(state, action) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.done = !todo.done;
    },
    removeTodo(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    clearCompleted(state) {
      state.items = state.items.filter((t) => !t.done);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to load todos";
      });
  },
});

export const { addTodo, toggleTodo, removeTodo, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;

export const selectTodos = (state) => state.todo.items;
export const selectTodoStatus = (state) => state.todo.status;
export const selectTodoError = (state) => state.todo.error;

export const selectTodoStats = (state) => {
  const total = state.todo.items.length;
  const completed = state.todo.items.filter((t) => t.done).length;
  return {
    total,
    completed,
    remaining: total - completed,
  };
};

