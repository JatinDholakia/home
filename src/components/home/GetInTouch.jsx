import React from "react";
const style1 = {
    fontStyle:"italic",
}

const GetInTouch = ({ heading, message, writer, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <div className="display-4 pb-3 text-center">
        <p className="lead text-center" style={style1}>
            {message}
        </p>
        <p className="lead text-center">{writer}</p> 
      </div>
      <div className="pb-3">
      <a href={`mailto: ${email}`}>
          <i className="fas fa-envelope fa-2x"></i>
      </a>
      </div>
    </>
  );
};

export default GetInTouch;
