import React from "react";
import "./Card.css";
import { Footer } from "./footer";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Page Not Found!</h1>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;
