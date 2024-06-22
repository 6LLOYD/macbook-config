import React from "react";
import mackbookAir from "./macbookAir.png";

const ProductInfo = () => {
  return (
    <>
      <div className="col-md-6 mt-3">
        <div
          className="bg-white p-3 d-flex flex-column"
          style={{ borderRadius: "14px" }}
        >
          <div className="text-center">
            <img src={mackbookAir} alt="MacBook-air" className="img-fluid" />
          </div>
          <h5 className="mt-0">MacBook Air - Gris sidéral</h5>
          <h4 className="green">1 199,00€</h4>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <div
          className="bg-white p-3 d-flex flex-column"
          style={{ borderRadius: "14px" }}
        >
          <h3>Personnalisez votre MacBook Air - Gris sidéral</h3>
          <ul className="list-unstyled mt-4">
            <li>
              Puce Apple M1 avec CPU 8 coeurs, GPU 7 coeurs, Neural Engine 16
              coeurs
            </li>
            <li>8 Go de mémoire unifiée</li>
            <li>SSD de 256 Go</li>
            <li>Ecran Retina 13 pouces avec True Tone</li>
            <li>Deux ports Thunderbolt/USB 4</li>
            <li>Adaptateur secteur USB-C 30 W</li>
            <li>Magic Keyboard rétroéclairé avec Touch ID - Français</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
