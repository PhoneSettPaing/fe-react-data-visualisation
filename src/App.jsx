import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SearchBar from "./components/SearchBar";
import TvShowList from "./components/TvShowList";
import { getShows } from "../api";

function App() {
  const [tvShows, setTvShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("girls");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShows(searchTerm)
      .then((result) => {
        setTvShows(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  function handleClick(event) {
    event.preventDefault();
    setLoading(true);
    getShows(searchTerm).then((result) => {
      setTvShows(result);
      setLoading(false);
    });
  }

  return (
    <>
      <h1>TV SERIES INFO</h1>
      <SearchBar setSearchTerm={setSearchTerm} handleClick={handleClick} />
      {loading ? <h3>Loading...</h3> : <TvShowList tvShows={tvShows} />}
    </>
  );
}

export default App;
