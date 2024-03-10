import { useEffect, useRef, useState } from "react";
import Movies from "../components/Movies";
import Filter from "../components/Filter";
import "../css/main.scss";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  let imageRef = useRef(null);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${page}`
    );
    const json = await response.json();
    setMovies((preMovies) => [...preMovies, ...json.data.movies]);
    setLoading(false);
    console.log(imageRef);
  };

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setPage((prePage) => prePage + 1);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  useEffect(() => {
    console.log("무한 루프 로직 돌아가는중");

    // imageRef가 null인 경우, 렌더링 시에 이미지가 아직 로딩되지 않았을 수 있습니다.
    if (!imageRef.current) {
      console.log("imageRef is null. Waiting for image to load...");
      return;
    }

    console.log(imageRef.current);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imageRef, page]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {/* <Filter /> */}
          <div className="image_container" ref={imageRef}>
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                genre={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
