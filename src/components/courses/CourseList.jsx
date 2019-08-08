import React from "react";
import { Link } from "react-router-dom";

const CourseList = () => (
  <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a
            className="btn btn-light"
            href={"http://pluralsight.com/courses/"}
          >
            Watch
          </a>
        </td>
        <td>
          <Link to={"/course/"}>Course Title</Link>
        </td>
        <td />
        <td>Course Category</td>
      </tr>
    </tbody>
  </table>
);

export default CourseList;
