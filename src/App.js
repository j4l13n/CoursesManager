import React from "react";
import HomePage from "./components/home/HomePage";
import Header from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";

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
