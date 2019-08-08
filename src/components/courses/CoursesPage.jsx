import React from "react";
import CourseList from "./CourseList.jsx";
class CoursesPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Courses</h1>
          <div className="text-right">
            <button
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              Add Course
            </button>
          </div>
          <CourseList />
        </div>
      </div>
    );
  }
}

export default CoursesPage;
