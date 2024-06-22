import React from "react";
import ProductInfo from "../productInfo/ProductInfo";
import Capacity from "../capacity/Capacity";

const Configuration = () => {
  return (
    <>
      <ProductInfo />
      <Capacity capacityType="ram" />
      <Capacity capacityType="ssd" />
    </>
  );
};

export default Configuration;
