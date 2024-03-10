import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/detail.scss";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div className="detail-container">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div
          // style={{ backgroundImage: `url(${detail.background_image})` }}
          >
            <div className="top">
              <img src={detail.medium_cover_image}></img>
              <div className="info">
                <h1>{detail.title_english}</h1>
                <div className="info-middle">
                  <div>
                    {detail.year} [{detail.language}]
                  </div>
                  <div>
                    {detail.genres.map((genre) => (
                      <span>{genre} / </span>
                    ))}
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="1xl"
                    style={{ color: "#FFD43B" }}
                  />
                  &nbsp;&nbsp;:&nbsp;
                  {detail.like_count}
                </div>
                <div>{detail.rating} / 10</div>
                <div>Running Time : {detail.runtime} min</div>
                <a href={detail.url} target="_blank">
                  <button className="detail-btn">More Detail</button>
                </a>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="middle-describe">
              <h2>Describe</h2>
              {detail.description_full}
            </div>
            <h3>Top Cast</h3>
            <ul className="cast">
              {detail.cast == null
                ? null
                : detail.cast.map((actor) => (
                    <li className="cast-each">
                      <a
                        href={`https://www.imdb.com/name/nm${actor.imdb_code}/`}
                        target="_blank"
                      >
                        <img src={actor.url_small_image}></img>
                      </a>
                      <span>
                        {actor.name} as {actor.character_name}
                      </span>
                    </li>
                  ))}
            </ul>
          </div>
          <div className="bottom">
            <img src={detail.medium_screenshot_image1} />
            <img src={detail.medium_screenshot_image2} />
            <img src={detail.medium_screenshot_image3} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
