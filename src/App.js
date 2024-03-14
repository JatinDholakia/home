import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Corrector from "./components/Corrector";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Books from "./components/Books";
import newsFeedApp from "./editable-stuff/news-feed-swagger.json"

const Home = React.forwardRef(() => {
  const titleRef = React.useRef();
  return (
    <>
      {navBar.show && <Navbar ref={titleRef} />}
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        codeforces={mainBody.codeforces}
        leetcode={mainBody.leetcode}
        ref={titleRef}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          programming={skills.programming}
// frameworks={skills.frameworks}
          // tools={skills.tools}
          // miscellaneous={skills.miscellaneous}
          technologies={skills.technologies}
        />
      )}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            writer={getInTouch.writer}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </>
  );
});

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home/>} />
        <Route path="/corrector" component={Corrector} />
        <Route path="/books" component={Books} />
        <Route path="/news-feed/swagger-ui" component={() => <SwaggerUI spec= {newsFeedApp} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
