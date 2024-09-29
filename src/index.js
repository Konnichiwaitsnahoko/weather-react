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
        and hosted on{" "}
        <a href="https://66f9aabed3552148a0e5536f--celebrated-paletas-0d51a2.netlify.app/">
          Netlify
        </a>
        .
      </p>
    </div>
  </React.StrictMode>
);

reportWebVitals();
