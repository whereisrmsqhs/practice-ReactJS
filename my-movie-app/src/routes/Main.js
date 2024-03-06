import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import "../css/movies_style.css";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="image_container">
          {movies.map((movie) => (
            <Movies key={movie.id} coverImg={movie.medium_cover_image} />
            // <span key={movie.id}>
            //   <img src={movie.medium_cover_image} />
            // </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
