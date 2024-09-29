import React from "react";
import ReactDOM from "react-dom/client";
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

reportWebVitals();
