import "../css/movies_style.css";

function Movies({ coverImg }) {
  return (
    <span>
      <img src={coverImg} alt="title" />
    </span>
  );
}

export default Movies;