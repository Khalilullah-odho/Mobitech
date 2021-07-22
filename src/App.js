import React, { useState, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import MobileForm from "./components/mobileForm";
import auth from "./services/authService";
import ProtectedRoute from "./components/protectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/AdminDashboard/dashboard";
import routes from "./components/common/routes";
import FancyRoute from "./components/common/fancyRoute";
import NavBar from "./components/Header/NavBar";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  return (
    <div>
      <ToastContainer />

      <NavBar user={user} />

      <Switch>
        {routes.map((route, i) => (
          <FancyRoute key={i} {...route} />
        ))}
        <ProtectedRoute path="/mobile-form/:id" component={MobileForm} />
        <ProtectedRoute path="/admin-panel" component={Dashboard} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
