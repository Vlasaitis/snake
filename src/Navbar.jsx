import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="https://github.com/Vlasaitis/snake" className="navbar-link">
        GitHub Repo
      </Link>
      <Link to="/snake/" className="navbar-link">
        Snake
      </Link>
    </div>
  );
};