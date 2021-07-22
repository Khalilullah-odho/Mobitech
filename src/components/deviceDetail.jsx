import React from "react";
import { Footer } from "./footer";

const DeviceDetail = (props) => {
  const getDevice = () => {
    if (props.location.state.detail) {
      return props.location.state.detail;
    } else {
      return props.location.state.mobile;
    }
  };

  const device = getDevice();

  return (
    <>
      <div className="jumbotron">
        <h1 className="brandName"> {device.name} </h1>
        <div className="device-details">
          <img src={device.img} alt={device.name} />
          <div>
            <h4>Specifications</h4>
            <h6 className="mt-4">Mobile Name : {device.name}</h6>
            <h6 className="mt-4">Brand Name : {device.brand.name}</h6>
            <h6 className="mt-4">Price : {device.price}</h6>
            <p className="mt-4">More details will be added soon ...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DeviceDetail;
