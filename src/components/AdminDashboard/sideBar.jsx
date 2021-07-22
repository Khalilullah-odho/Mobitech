import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { saveBrands } from "../../services/brandsService";
import { toast } from "react-toastify";

export const SideBar = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: "",
  });

  const openModel = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveBrands(data);
      toast.success("Brand Added Sucessfully");
      setModal(false);
    } catch (error) {
      if (error.response && error.response.status === 400)
        toast.error(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link
          to="/mobile-form/new"
          className="btn btn-primary"
          style={{ marginTop: "3rem" }}
        >
          Add New Mobile
        </Link>
        <Link
          to="#"
          className="btn btn-primary"
          style={{ marginTop: "3rem" }}
          onClick={openModel}
        >
          Add New Brand
        </Link>
      </div>
      <Modal show={modal}>
        <button
          type="button"
          className="btn btn-close"
          aria-label="Close"
          style={{
            position: "absolute",
            right: "0",
            color: "#0069D9",
            fontSize: "1.5rem",
          }}
          onClick={(e) => closeModal(e)}
        >
          X
        </button>
        <div className="container">
          <h3>Add New Brand</h3>
          <div className="form-group">
            <label>Brand Name:</label>
            <input
              type="text"
              value={data.name}
              name="name"
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};
