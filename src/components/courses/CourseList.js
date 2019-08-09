import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Navbar, NavLink } from "reactstrap";

const CourseList = ({ courses, onDeleteClick }) => (
  <Container>
    {courses.map(course => {
      return (
        <Row key={course.id} style={{ marginBottom: 20}}>
          <Col md={{ size: 10, offset: 1 }}>
            <Navbar color="light" light expand="md">
              <NavLink href={"/course/" + course.slug}>
                <h3>{""}<small>{course.authorName}</small></h3>
              </NavLink>
            </Navbar>
            <Navbar color="light" light expand="md">
              <NavLink href="#" style={{ color: "black", marginTop: -20 }}>
                {course.title}
              </NavLink>
            </Navbar>
            <Navbar color="light" light expand="md">
              <NavLink href="#" style={{ color: "silver", marginTop: -15 }} onClick={() => onDeleteClick(course)}>
                Remove
              </NavLink>
            </Navbar>
          </Col>
        </Row>
      );
    })}
  </Container>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
