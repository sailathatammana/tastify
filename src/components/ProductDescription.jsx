import React from "react"; // no need to import react since version 17

export default function ProductDescriptionSection({ product }) {
  const imageObject = require(`../assets/products/${product.image}`);
  const imageURL = imageObject.default;

  // space
  return (
    <section className="section-product_description">
      <img src={imageURL} alt="img" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </section>
  );
}
