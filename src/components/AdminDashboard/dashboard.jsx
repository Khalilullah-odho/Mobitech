import React, { useState, useEffect } from "react";
import mobile from "../../services/mobilesService";
import { deleteBrand, getBrands } from "../../services/brandsService";
import { DashboardHeader } from "./dashboardHeader";
import { DataTable } from "./table";
import { SideBar } from "./sideBar";
import { toast } from "react-toastify";
import { SearchData } from "./searchData";

const Dashboard = () => {
  const [brands, setBrands] = useState([]);
  const [mobiles, setMobiles] = useState([]);

  const [searchQuerry, setSearchQuerry] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [tab, setTab] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: mobiles } = await mobile.getMobiles();
      const { data: brands } = await getBrands();

      setBrands(brands);
      setMobiles(mobiles);
    }
    fetchData();
  }, []);

  const handleSetTab = (item) => {
    setTab("");
    setTab(item.name);
  };

  const handleMobileDelete = async (item) => {
    const originalData = mobiles;

    const newMobiles = originalData.filter((m) => m._id !== item._id);

    setMobiles(newMobiles);

    try {
      await mobile.deleteMobile(item._id);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("This Mobile is already deleted.");

      setMobiles(originalData);
    }
  };

  const handleBrandDelete = async (item) => {
    const originalData = brands;

    const newBrands = originalData.filter((m) => m._id !== item._id);

    setBrands(newBrands);

    try {
      await deleteBrand(item._id);
      toast.success("Deleted Successfully");
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("This Brand is already deleted.");

      setBrands(originalData);
    }
  };
  const handleSearchQuerry = (querry) => setSearchQuerry(querry);
  const getMobiles = () => {
    let filteredMobiles = mobiles;
    if (searchQuerry) {
      filteredMobiles = filteredMobiles.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuerry.toLowerCase())
      );
    }
    return filteredMobiles;
  };

  const getBrand = () => {
    let filteredBrands = brands;
    if (searchQuerry) {
      filteredBrands = filteredBrands.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuerry.toLowerCase())
      );
    }
    return filteredBrands;
  };

  return (
    <div className="container">
      <div className="dashboard">Admin Dashboard</div>
      <DashboardHeader setTab={handleSetTab} />
      <div className="row mb-5">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col">
          <SearchData value={searchQuerry} onChange={handleSearchQuerry} />
          {tab === "Mobiles" ? (
            <DataTable data={getMobiles()} onDelete={handleMobileDelete} />
          ) : tab === "Brands" ? (
            <DataTable data={getBrand()} onDelete={handleBrandDelete} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
