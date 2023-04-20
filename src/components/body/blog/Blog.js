import React from "react";
import "./Blog.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from "react-router-dom";
import data from '../../data/blogdata.json'

function Blog() {
  return <div className="blog-body-container">
    <div className="blog-heading">
      <h3>Today's Schedule</h3>
        <div className="blog-all">
          <p>See All</p>
          <ChevronRightIcon/>
        </div>
    </div>
    <div className="blog-tasks">
      {data.map((value)=>(
              <div className="task" style={{borderColor:`${value.color}`}}>
              <p className="task-heading">{value.taskHeading}</p>
              <p className="task-details">{value.taskTime}</p>
              <p className="task-details">{value.taskLocation}</p>
            </div>
      ))}
    </div>
  </div>
}

export default Blog;
