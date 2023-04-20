import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Pie.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function PieApp() {

  const piedata = [
    {
      name: "Basic Tees",
      value: 550,
      id: "1",
    },
    {
      name: "Custom Short Pants",
      value: 310,
      id: "2",
    },
    {
      name: "Super Hoodies",
      value: 140,
      id: "3",
    },
  ];
  const COLORS = ["#afff94", "#fbd584", "#ff9190"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="pie-body-container">
      <div className="pie-heading">
        <h1>Top Products</h1>
        <div className="pie-month-section">
          <div className="pie-month-heading">
            <p>May - June 2021</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className="pie-container">
        <PieChart width={400} height={400} margin={{ bottom: -100, top: -21 }}>
          <Pie
            data={piedata}
            cx={80}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={65}
            fill="#8884d8"
            dataKey="value"
            s
          >
            {piedata.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="pie-details">
          <div>
            <div className="pie-measure-container">
              <FiberManualRecordIcon
                style={{ color: "#afff94", fontSize: "15px" }}
              />
              <h3>Basic Tees</h3>
            </div>
            <p className="percentage">55%</p>
          </div>
          <div>
            <div className="pie-measure-container">
              <FiberManualRecordIcon
                style={{ color: "#fbd584", fontSize: "15px" }}
              />
              <h3>Custom Short Pants</h3>
            </div>
            <p className="percentage">31%</p>
          </div>
          <div>
            <div className="pie-measure-container">
              <FiberManualRecordIcon
                style={{ color: "#ff9190", fontSize: "15px" }}
              />
              <h3>Super Hoodies</h3>
            </div>
            <p className="percentage">14%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieApp;
