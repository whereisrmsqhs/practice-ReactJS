import { useEffect, useCallback, useState, useMemo } from "react";
import Movies from "../components/Movies";
import Filter from "../components/Filter";
import "../css/main.scss";

const movieFetch = async (page) =>
  await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}`).then(
    async (res) => await res.json()
  );

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = () => {
    setLoading(true);

    movieFetch(page).then(({ data }) => {
      console.log("movieFetch done");
      setMovies((preMovies) => [...preMovies, ...data.movies]);
      setLoading(false);
      console.log("Movie" + page);
    });
  };
  const handleIntersection = useCallback((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setPage((prePage) => prePage + 1);
    }
  }, []);

  const observer = useMemo(
    () =>
      new IntersectionObserver(handleIntersection, {
        rootMargin: "300px",
      }),
    []
  );

  const imageRef = useCallback(
    (element) => {
      if (!element) return;
      observer.observe(element);
    },
    [observer]
  );

  useEffect(() => () => observer.disconnect(), []);

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div>
      <div>
        <Filter />
        <div className="image_container">
          {movies.map((movie, index) => (
            <Movies
              key={index}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              genre={movie.genres}
              rating={movie.rating}
            />
          ))}
        </div>
        {loading && (
          <div
            style={{
              width: "100%",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              "padding-top": "24px",
              "padding-bottom": "24px",
            }}
          >
            Loading...
          </div>
        )}
        <div ref={imageRef} />
      </div>
    </div>
  );
}

export default Main;
