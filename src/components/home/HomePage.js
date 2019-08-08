import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container" style={{ marginTop: 20 }}>
    <div className="jumbotron">
      <h1>Courses Management</h1>
      <p>React, Redux and many more course will be found here</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  </div>
);

export default HomePage;
