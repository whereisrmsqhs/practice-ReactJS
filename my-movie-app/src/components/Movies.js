import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../css/movies.scss";
import { useState } from "react";

function Movies({ id, coverImg, genre, rating }) {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = (event) => {
    setIsHovered(true);
  };
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link to={`/detail/${id}`}>
      <div
        className="movie-container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img src={coverImg} alt="title" className={isHovered ? "blur" : null} />
        <div className={`small-info ${isHovered ? "" : "visible"}`}>
          <div className="hover-info">
            <div className="hover-info-top">
              <FontAwesomeIcon
                icon={faStar}
                size="2xl"
                style={{ color: "#FFD43B" }}
              />
              <h3>{rating} / 10</h3>
            </div>
            {genre.map((g, index) => {
              return index < 2 ? <div>{g}</div> : null;
            })}
          </div>
          <button>View Details</button>
        </div>
      </div>
    </Link>
  );
}

export default Movies;
