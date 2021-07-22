import React, { Component } from "react";
import Form from "./common/form";
import { Footer } from "./footer";

class Contact extends Form {
  state = {
    data: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
  };
  render() {
    return (
      <>
        <div className="container">
          <form action="" className="form">
            <h3>Contact Us</h3>
            {this.renderInput("name", "Name", "text")}
            {this.renderInput("email", "Email Address", "email")}
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
