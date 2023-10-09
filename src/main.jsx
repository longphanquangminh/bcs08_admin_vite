import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./redux/userSlice.js";
import spinnerSlice from "./redux/spinnerSlice.js";

export const store = configureStore({
  reducer: {
    userSlice,
    spinnerSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
