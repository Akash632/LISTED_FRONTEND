import React from "react";
import "./Sidebar.css";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import StyleIcon from '@mui/icons-material/Style';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-body-container">
        <div className="sidebar-up">
        <h1>Board.</h1>
        <div className="options-container">
          <div className="sidebar-menu">
            <PieChartOutlineIcon />
            <NavLink className="nav-text" to="/Dashboard">Dashboard</NavLink>
          </div>
          <div className="sidebar-menu">
            <StyleIcon />
            <NavLink className="nav-text" to="/Transaction">Transactions</NavLink>
          </div>
          <div className="sidebar-menu">
            <CalendarMonthIcon/>
            <NavLink className="nav-text" to="/Schedules">Schedules</NavLink>
          </div>
          <div className="sidebar-menu">
            <AccountCircleIcon/>
            <NavLink className="nav-text" to="/Users">Users</NavLink>
          </div>
          <div className="sidebar-menu">
            <SettingsIcon/>
            <NavLink className="nav-text" to="/Settings">Settings</NavLink>
          </div>
        </div>
        </div>
        <div className="sidebar-down">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
