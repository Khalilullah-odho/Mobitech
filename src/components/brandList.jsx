import React, { useEffect } from "react";
import MobileBox from "./common/mobileBox";
import { Link } from "react-router-dom";
import Aos from "aos";

const BrandList = (props) => {
  useEffect(() => {
    Aos.init({
      disable: "mobile",
    });
    Aos.refresh();
  }, []);

  const { brands, mobiles } = props;

  return (
    <>
      {brands.map((brand) => {
        return (
          <div className="list-row" data-aos="fade-up" key={brand._id}>
            <h2 className="brandName">{brand.name} Mobiles</h2>
            <div className="list-column">
              <MobileBox
                mobiles={mobiles
                  .filter((mobile) => mobile.brand.name === brand.name)
                  .slice(0, 3)}
              />
            </div>
            <Link
              to={`/brands/${brand.name.replace(/\s+/g, "")}`}
              className="btn btn-primary view-more"
            >
              View More
            </Link>
            <br />
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default BrandList;
