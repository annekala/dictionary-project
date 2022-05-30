import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> ❖ Dico-App ❖ </header>
        <main>
          <Search defaultKeyword="Book" />
        </main>
        <footer className="text-center">
          {" "}
          This project was coded by Anne Kala as is{" "}
          <a
            href="https://github.com/annekala/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://elaborate-cuchufli-5860fa.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
