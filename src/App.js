import React from "react";
import HomePage from "./components/home/HomePage.jsx";
import Header from "./components/common/Header.jsx";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/about/AboutPage.jsx";
import CoursesPage from "./components/courses/CoursesPage.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
