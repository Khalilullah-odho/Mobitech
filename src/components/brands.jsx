import Aos from "aos";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../services/brandsService";
import { Footer } from "./footer";
import Loader from "./common/loader";

const Brands = () => {
  const [state, setstate] = useState({
    brands: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
    async function fetchData() {
      setIsLoading(true);
      const { data } = await getBrands();
      const brands = data;

      setstate({ brands });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const { brands } = state;

  if (isLoading) return <Loader />;

  return (
    <>
      <div>
        <h2 style={{ margin: "4rem 0 2rem 0" }}>All Brands</h2>
        <div className="brand-box-main" data-aos="fade-up">
          {brands.map((brand) => {
            return (
              <Link to={`/brands/${brand.name}`} key={brand._id}>
                <div className="brand-box">{brand.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brands;
