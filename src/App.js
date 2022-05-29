import logo from "./logo.png";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img src={logo} className="App-logo" alt="logo" />{" "}
          <span className="Dictionary"> DICO - APP </span>{" "}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Search defaultKeyword="Book" />
        </main>
        <footer className="text-center"> Coded by Anne Kala</footer>
      </div>
    </div>
  );
}
