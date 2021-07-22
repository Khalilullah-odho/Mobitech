import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import mobile from "../../services/mobilesService";

const SearchBar = ({ setCollabs, onSearch }) => {
  const [querry, setQuerry] = useState("");
  const animatedComponents = makeAnimated();

  const loadOptions = async () => {
    const { data } = await mobile.getMobiles();
    const searchMobile = data.filter((mobile) => {
      return Object.values(mobile)
        .join(" ")
        .toLowerCase()
        .includes(querry.toLowerCase());
    });
    return searchMobile;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        <AsyncSelect
          placeholder="Search"
          backspaceRemovesValue
          isClearable
          cacheOptions
          components={
            (animatedComponents,
            { DropdownIndicator: () => null, IndicatorSeparator: () => null })
          }
          getOptionLabel={(e) => e.name}
          getOptionValue={(e) => e._id}
          loadOptions={loadOptions}
          onInputChange={(value) => setQuerry(value)}
          onChange={(value) => setCollabs(value)}
        />
      </div>
      <button className="btn btn-outline-primary ml-2" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
