import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

export const DashboardHeader = ({ setTab }) => {
  const [tabItems] = useState([
    {
      id: 1,
      name: "Mobiles",
      className: "flex-sm-fill text-sm-center nav-link   ",
    },
    {
      id: 2,
      name: "Brands",
      className: "flex-sm-fill text-sm-center nav-link  ",
    },
  ]);

  const [activeLink, setActiveLink] = useState(null);

  const handleTabSelect = (item) => {
    setActiveLink(item.id);
    setTab(item);
  };

  return (
    <div className="container">
      <nav
        className="nav nav-pills flex-column flex-sm-row mb-5"
        style={{ background: "#fff" }}
      >
        {tabItems.map((item) => {
          return (
            <Link
              key={item.id}
              className={
                item.className + (item.id === activeLink ? " active" : "")
              }
              aria-current="page"
              to="#"
              onClick={() => handleTabSelect(item)}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
