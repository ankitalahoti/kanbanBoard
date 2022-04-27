import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from "./redux/store/configureStore";
import { fetchTasks } from "./redux/actions/tasks";
import { StyledEngineProvider } from "@mui/material/styles";

const store = configureStore();
store.dispatch(fetchTasks());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StyledEngineProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
