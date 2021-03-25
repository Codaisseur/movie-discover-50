import { useState } from "react";
import axios from "axios";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, setSearchState] = useState({ status: "idle" });

  const search = async () => {
    console.log("TODO search movies for:", searchText);
    // collect the searchterm in our input field

    setSearchState({ status: "loading" });

    // This is to encode characters that have special meaning in urls
    const encodedSearch = encodeURIComponent(searchText);

    const response = await axios.get(
      `http://www.omdbapi.com/?s=${encodedSearch}&apikey=67759755`
    );
    // After fetching the data we need to set it to some state so we can use it later
    // to render
    setSearchState({ status: "done", data: response.data.Search });
  };

  console.log("searchState", searchState);
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {searchState.status === "idle" && <div>Type a title to search</div>}
        {searchState.status === "loading" && <div>Loading...</div>}
        {searchState.status === "done" && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {searchState.data.map(m => (
              <MovieItem movie={m} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
