import React, { useState,useContext } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Nav from "./components/body/nav/Nav";
import Cards from "./components/body/cards/Cards";
import Graph from "./components/body/graph/Graph";
import Pie from "./components/body/pie/PieApp";
import Blog from "./components/body/blog/Blog";
import Login from "./components/login/Login";
import {userContext} from './components/context/Context'
import PieApp from "./components/body/pie/PieApp";
// import PieApp from "./components/pie/PieApp";

function App() {
  const {login,setLogin}=useContext(userContext);
  console.log(login);
  return (
    <div className="dashboard">
      {login
      ?
        <div className="dashboard-body">
        <Sidebar />
          <div className="body-parent-container">
            <div className="body-main-container">
              <Nav />
              <Cards />
              <Graph />
              <div className="bottom-container">
                <PieApp/>
                <Blog />
              </div>
            </div>
          </div>
        </div>
        :
        <Login/>
      }
    </div>
  );
}

export default App;
