import React, { useState, useEffect } from "react";
import mobile from "../services/mobilesService";
import Aos from "aos";
import MobileBox from "./common/mobileBox";
import { Footer } from "./footer";
import Loader from "./common/loader";

const BrandModel = (props) => {
  const [state, setstate] = useState({
    mobiles: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
    async function fetchData() {
      setIsLoading(true);
      const { data: mobiles } = await mobile.getMobiles();

      setstate({ mobiles });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const name = props.match.params.name;
  const brandMobiles = state.mobiles.filter((m) => m.brand.name === name);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="container">
        <h2 className="brandName">{name} Mobiles</h2>
        <div className="brand-model-box">
          <MobileBox mobiles={brandMobiles} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandModel;
