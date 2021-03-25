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
      <strong>{props.movie.Title}</strong> ({props.movie.imdbID})
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
