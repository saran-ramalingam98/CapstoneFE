import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/Home">
              HOME
            </Link>
          </li>
         <Link to="/About"><li className="topListItem">ABOUT</li></Link> 
          <Link to="/Contact"><li className="topListItem">CONTACT</li></Link>
         <Link  to="/"><li className="topListItem">LOGOUT</li></Link>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  );
}
