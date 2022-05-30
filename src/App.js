import logo from "./logo.png";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img src={logo} className="App=logo" alt="logo" width="100px" />
          <span className="Dictionary"> My Dico-App </span> <br />
        </header>
        <main>
          <Search defaultKeyword="Book" />
        </main>
        <footer className="text-center">
          {" "}
          This project was coded by Anne Kala as is{" "}
          <a
            href="https://github.com/annekala/weather-react"
            target="_blank"
            rel="noreferrer"
          ></a>
          open-sourced on GitHub and{" "}
          <a
            href="https://github.com/annekala/weather-react"
            target="_blank"
            rel="noreferrer"
          ></a>
          hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
