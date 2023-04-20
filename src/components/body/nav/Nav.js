import React,{useState} from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleChange = () =>{
    setNav(!nav)
  }
  return (
    <>
      <div className="heading-container">
        <h2>Dashboard</h2>
        <div className="search-card">
          <div className="ham-container" onClick={handleChange}>
            <MenuIcon />
          </div>
          <div className="search-input-container">
            <input type="text" placeholder="search" />
            <SearchIcon />
          </div>
          <div className="notification-icon">
            <NotificationsNoneIcon />
          </div>
          <AccountCircleIcon />
        </div>
      </div>
      {nav ? (
        <div className="navbox" style={{display:"block"}}>
          <ul className="nav-list">
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Schedules</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </div>
      ) : (
        <div className="navbox" style={{display:"none"}}>
          <ul className="nav-list">
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
