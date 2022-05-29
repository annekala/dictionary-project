import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [words, setWords] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setWords(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="language">
        <section>
          {" "}
          <form onSubmit={handleSubmit}>
            {" "}
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeyword}
            ></input>{" "}
          </form>
          <div className="hint">Suggested words: Sunset, Hello, Book, Love</div>
        </section>
        <Results definition={words} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
