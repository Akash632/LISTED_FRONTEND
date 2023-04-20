import React from "react";
import "./Card.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import StyleIcon from '@mui/icons-material/Style';

function Cards() {
  return (
    <div className="card-container">
      <div className="card card-1">
        <div className="icon-container">
          <LocalAtmIcon />
        </div>
        <div className="text-card">
          <p>Total Revenue</p>
          <h2>$2,129,430</h2>
        </div>
      </div>
      <div className="card card-2">
        <div className="icon-container">
          <StyleIcon />
        </div>
        <div className="text-card">
          <p>Total Transactions</p>
          <h2>1,520</h2>
        </div>
      </div>
      <div className="card card-3">
        <div className="icon-container">
          <ThumbUpOffAltIcon />
        </div>
        <div className="text-card">
          <p>Total Likes</p>
          <h2>9,721</h2>
        </div>
      </div>
      <div className="card card-4">
        <div className="icon-container">
          <PeopleOutlineIcon />
        </div>
        <div className="text-card">
          <p>Total Users</p>
          <h2>892</h2>
        </div>
      </div>
    </div>
  );
}

export default Cards;
