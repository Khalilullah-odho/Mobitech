import React, { useEffect, useState } from "react";
import mobile from "../services/mobilesService";
import BrandList from "./brandList";
import SearchBar from "./common/searchBar";
import LatestMobiles from "./latestMobiles";
import { getBrands } from "../services/brandsService";
import Loader from "./common/loader";
import { Footer } from "./footer";

const Home = (props) => {
  const [state, setstate] = useState({
    mobiles: [],
    brands: [],
  });
  const [collabs, setCollabs] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const { data: mobiles } = await mobile.getMobiles();
      const { data: brands } = await getBrands();

      setstate({ mobiles, brands });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleSearch = () => {
    props.history.push({
      pathname: `/mobile/${collabs.name.replace(/\s+/g, "")}`,
      state: { detail: collabs },
    });
  };

  const latestMobiles = state.mobiles
    .sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d - c;
    })
    .slice(0, 5);

  const topBrands = state.brands.reduce((arr, cur) => {
    const array1 = [
      "Apple",
      "Samsung",
      "Vivo",
      "Oppo",
      "Huawei",
      "Realme",
      "Xiaomi",
    ];
    if (array1.includes(cur.name)) {
      arr.push({
        name: cur.name,
        _id: cur._id,
      });
    }
    return arr;
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="container mx-auto">
        <div style={{ marginTop: "2em" }}>
          <SearchBar setCollabs={setCollabs} onSearch={handleSearch} />
        </div>
        <LatestMobiles mobiles={latestMobiles} />
        <BrandList brands={topBrands} mobiles={state.mobiles} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
