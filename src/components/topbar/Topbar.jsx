import { Link } from "react-router-dom";
import (/* webpackPreload: true */ "./topbar.css");

export default function Topbar() {
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
