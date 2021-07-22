import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import { Footer } from "./footer";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit} className="form">
            <h3>Sign In</h3>
            {this.renderInput("email", "Email Address", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Log In")}
            <p className="forgot-password text-right">
              Forgot <Link to="#">password?</Link>
            </p>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default LoginForm;
