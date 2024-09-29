import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchEngine from "./SearchEngine";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        This project was coded by{" "}
        <a href="https://github.com/Konnichiwaitsnahoko">Nahoko Park </a> and is
        open-sourced on{" "}
        <a href="https://github.com/Konnichiwaitsnahoko/weather-react">
          GitHub
        </a>{" "}
        and hosted on Netlify.
      </p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
