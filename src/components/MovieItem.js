import { Link } from "react-router-dom";

export default function MovieItem(props) {
  // props = { movie: {actualMovieObj} }
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Link to={`/discover/${props.movie.imdbID}`}>
        <strong>{props.movie.Title}</strong>
      </Link>{" "}
      ({props.movie.imdbID})
      <img
        src={props.movie.Poster}
        alt={props.movie.Title}
        style={{
          display: "block",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}
