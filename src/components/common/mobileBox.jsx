import React from "react";
import { Link } from "react-router-dom";
import "../Card.css";

function MobileBox(props) {
  const { mobiles } = props;
  return (
    <React.Fragment>
      {mobiles.map((mobile, index) => {
        return (
          <Link
            key={index}
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/mobile/${mobile.name.replace(/\s+/g, "")}`,
              state: { mobile },
            }}
          >
            <div className="mobile-card" key={mobile._id}>
              <div className="mobile-image">
                <img src={mobile.img} alt={mobile.name} />
              </div>
              <p className="title">{mobile.name}</p>

              <div className="purchase">
                <p>Rs {mobile.price} PKR</p>
              </div>
            </div>
          </Link>
        );
      })}
    </React.Fragment>
  );
}

export default MobileBox;
