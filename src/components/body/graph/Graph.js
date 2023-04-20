import axios from "axios";
import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import "./Graph.css";
function Graph() {
  const [apidata, setApidata] = useState();

  function apiData() {
    axios
      .get("https://643ae83190cd4ba56304de34.mockapi.io/chart_data")
      .then((response) => setApidata(response.data));
  }
  useEffect(() => {
    apiData();
  }, []);

  return (
    <div className="graph-main-container">
      <div className="graph-container">
        <div className="graph-heading">
          <div className="left-heading">
            <p>Activities</p>
            <div className="month-heading">
            <p>May - June</p>
            <KeyboardArrowDownIcon/>
            </div>
          </div>
          <div className="right-heading">
            <div className="graph-reading">
              <FiberManualRecordIcon style={{color:"#fca7a6",fontSize:15}}/>
              <p>Guest</p>
            </div>
            <div className="graph-reading">
              <FiberManualRecordIcon style={{color:"#79D45E",fontSize:15}}/>
              <p>User</p>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
          <LineChart
            data={apidata}
            height={200}
            margin={{ bottom: 235, right: 40 }}
          >
            <CartesianGrid vertical={false}/>
            <XAxis dataKey="name" interval={"preserveStartEnd"} axisLine={false}/>
            <YAxis axisLine={false}/>
            <Tooltip/>
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#79D45E"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#fca7a6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
