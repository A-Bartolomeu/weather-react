import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://abartolomeu-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABartolomeu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ABartolomeu-coder/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
