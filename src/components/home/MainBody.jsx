import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
// import { Codeforces } from '@icons-pack/react-simple-icons';
import { Leetcode } from "@icons-pack/react-simple-icons";

// Positioning CF icon
const style1 = {
    position: "relative",
    bottom: "13px",
    left: "8px"
};
const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, codeforces, leetcode }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist className="lead typist" cursor={{ show: true }}>
            {" "}
            {message}
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={icon.name}
              >
                  {/* {console.log(icon.image.split("-"[1]))} */}
                <i className={`${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
              {/* <a
                key={`social-icon-5`}
                target="_blank"
                rel="noopener noreferrer"
                href={codeforces}
                aria-label="Codeforces"
                style={style1}
              >
                  <Codeforces 
                  color="#FFFFFF"
                  size={52}
                  >
                  </Codeforces>
              </a> */}
              <a
                key = {`social-icon-6`}
                target="_blank"
                rel="noopener noreferrer"
                href={leetcode}
                aria-label="Leetcode"
                style={style1}
                >
                  <Leetcode
                  color="#FFFFFF"
                  size={45}
                  >
                  </Leetcode>
              </a>
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
