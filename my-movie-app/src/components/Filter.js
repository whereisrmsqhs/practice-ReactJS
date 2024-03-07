import "../css/filter.scss";

function Filter() {
  return (
    <form className="filter-container">
      <p>Search Term:</p>
      <input placeholder="search with movie name" type="text" />
      <ul className="category">
        <li>
          <select>
            <option>Quality (All)</option>
            <option>480P</option>
            <option>720p</option>
            <option>1080p</option>
            <option>1080p.x265</option>
            <option>2160p</option>
            <option>3D</option>
          </select>
        </li>
        <li>
          <select>
            <option>Genre (All)</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Animation</option>
            <option>Biography</option>
            <option>Comedy</option>
            <option>Crime</option>
            <option>Documentary</option>
            <option>Drama</option>
            <option>Family</option>
            <option>Fantasy</option>
            <option>Film-Noir</option>
            <option>Game-Show</option>
            <option>History</option>
            <option>Horror</option>
            <option>Music</option>
            <option>Musical</option>
            <option>Mystery</option>
            <option>News</option>
            <option>Reality-tv</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
            <option>Sport</option>
            <option>Talk-Show</option>
            <option>Thriller</option>
            <option>War</option>
            <option>Western</option>
          </select>
        </li>
        <li>
          <select>
            <option>Rating (All)</option>
            <option>9+</option>
            <option>8+</option>
            <option>7+</option>
            <option>6+</option>
            <option>5+</option>
            <option>4+</option>
            <option>3+</option>
            <option>2+</option>
            <option>1+</option>
          </select>
        </li>
        <li>
          <select>
            <option>Order By (Latest)</option>
            <option>Oldest</option>
            <option>Fetured</option>
            <option>Seeds</option>
            <option>Peers</option>
            <option>Year</option>
            <option>IMDb Rating</option>
            <option>YTS Likes</option>
            <option>RT Audience</option>
            <option>Alphabetical</option>
            <option>Downloads</option>
          </select>
        </li>
      </ul>
      <button>Search</button>
    </form>
  );
}

export default Filter;
