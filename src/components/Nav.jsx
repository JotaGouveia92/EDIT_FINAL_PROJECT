import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="wrapper">
        <div className="nav__content">
          <div className="nav__naming">
            <a href="/">
              <img
                src="/images/personal_images/Naming-logo.gif"
                alt="naming"
                className="logo-gif"
              />
            </a>
          </div>
          <nav className="nav__links">
            <Link className="nav__links-item" to="/work">
              Work
            </Link>
            <Link className="nav__links-item" to="/aboutMe">
              About Me
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
