import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    const json = await response.json();
    setDetail(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  console.log(detail);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {detail.data.movie.description_full}
          <img src={detail.data.movie.background_image_original}></img>
        </div>
      )}
    </div>
  );
}

export default Detail;
