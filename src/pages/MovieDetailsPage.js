import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  // const params = useParams();
  // const movie_id = params.movie_id;
  // const { movie_id } = params;
  const { movie_id } = useParams();
  console.log("this is movie id", movie_id);

  const [movieData, setMovieData] = useState(null);

  console.log("This is movie data", movieData);

  useEffect(() => {
    console.log("This is the useEffect");
    const API_URL = `http://www.omdbapi.com/?i=${movie_id}&apikey=67759755`;

    async function fetchData() {
      console.log("This is fetchData");
      // You can await here
      const response = await axios.get(API_URL);
      console.log("This is the response", response.data);
      setMovieData(response.data);
    }
    fetchData();
  }, [movie_id]);

  return (
    <div>
      {movieData ? (
        <div>
          <h1>{movieData.Title}</h1>
          <img src={movieData.Poster} />
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
