import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import SearchBar from "./components/SearchBar";
import TvShowList from "./components/TvShowList";


function App() {
  const [tvShows, setTvShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("girls");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}&limit=10`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        console.log(body);
        setTvShows(body);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <>
      <h1>TV SERIES INFO</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading ? <h3>Loading...</h3> : <TvShowList tvShows={tvShows} />}
    </>
  );
}

export default App;
