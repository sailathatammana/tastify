import React from "react";
import { Link } from "react-router-dom";

export default function Products({ item }) {
  const imageObject = require(`../assets/products/${item.image}`);
  const imageURL = imageObject.default;

  return (
    <section className="section-products">
      <article>
        <img src={imageURL} alt="img" />
        <h2>{item.title}</h2>
        <p>{item.shortDescription}</p>
        <Link to={`./${item.category}/${item.id}`}>View product</Link>
      </article>
    </section>
  );
}
