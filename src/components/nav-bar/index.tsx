import { Link } from "react-router-dom";
import { routeConfig } from "../../PageRouter";
import "./index.css";
import { v4 as uuid } from "uuid";
import { LinkWithQuery } from "../link-with-query";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      {routeConfig.map((route) => (
        <>
          <LinkWithQuery className="link" key={uuid()} to={route.path}>
            {route.label}
          </LinkWithQuery>
        </>
      ))}
    </nav>
  );
};

export default NavBar;
