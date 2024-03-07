import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Filter from "../components/Filter";
import "../css/main.scss";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <Filter />
          <div className="image_container">
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                coverImg={movie.medium_cover_image}
                genre={movie}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
