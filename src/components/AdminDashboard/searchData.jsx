import React from "react";

export const SearchData = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-3"
      type="text"
      name="querry"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder="Search"
    />
  );
};
