import React from "react";
import { Link } from "react-router-dom";

export default function Products({ item }) {
  const imageObject = require(`../assets/products/${item.image}`);
  const imageURL = imageObject.default;
  const link = `./${item.category}/${item.id}`;

  return (
    <section className="section-products">
      <article>
        <img src={imageURL} alt="img" />
        <h2>{item.title}</h2>
        <p>{item.shortDescription}</p>
        <Link to={link}>View product</Link>
      </article>
    </section>
  );
}
