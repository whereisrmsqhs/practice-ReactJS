import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/header.scss";

function Header() {
  return (
    <nav>
      <div>
        <FontAwesomeIcon
          icon={faClapperboard}
          size={"2xl"}
          style={{ color: "#FFD43B" }}
          bounce
        />
        <Link to={"/"}>
          <span className="title">Nomad Movie</span>
        </Link>
      </div>
      <input
        className="search-bar"
        type="text"
        placeholder="Quick Search"
      ></input>
      <div className="navbar-nav">
        <ul className="navbar-nav-list">
          <li>Home</li>
          <li>4K</li>
          <li>Trending</li>
          <li>Browser Movies</li>
          <li>
            <strong>Login</strong>
          </li>
          <li>
            <strong>Register</strong>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
