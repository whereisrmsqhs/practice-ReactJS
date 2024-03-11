import { useCallback, useEffect, useRef, useState } from "react";
import Movies from "../components/Movies";
import Filter from "../components/Filter";
import "../css/main.scss";

const useIntersect = (onIntersectFn, options) => {
  const ref = useRef(null); // 1
  const callback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersectFn(entry, observer);
      });
    },
    [onIntersectFn]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options); // 2
    observer.observe(ref.current); // 3
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      getMovies(page);
    },
    { threshold: 0.5 } // Adjust the threshold value as needed
  );

  const getMovies = async (tpage) => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${tpage}`
    );
    const json = await response.json();
    setMovies((preMovies) => [...preMovies, ...json.data.movies]);
    setLoading(false);
    // setPage((page) => page + 1);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {/* <Filter /> */}
          <div className="image_container">
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                genre={movie.genres}
                rating={movie.rating}
              />
            ))}
            <div ref={ref} style={{ width: "100%", height: 30 }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
