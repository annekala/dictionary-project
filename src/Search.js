import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [words, setWords] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setWords(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000172852a5c918f4b2cac81ca6d5b0d6742";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <h1> What word do you want to look up?</h1>{" "}
          <form onSubmit={handleSubmit}>
            {" "}
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeyword}
              defaultValue={props.defaultKeyword}
            ></input>{" "}
          </form>
          <div className="hint">Suggested words: Sunset, Hello, Book, Love</div>
        </section>
        <Results definition={words} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
