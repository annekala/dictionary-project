import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <span>
          {" "}
          <img src={logo} className="App-logo" alt="logo" />{" "}
        </span>{" "}
        Dictionary
      </header>
    </div>
  );
}
