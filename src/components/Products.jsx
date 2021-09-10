import React from "react";

export default function Products({ item }) {
  const imageObject = require(`../assets/products/${item.image}`);
  const imageURL = imageObject.default;
  return (
    <section className="section-products ">
      <article>
        <img src={imageURL} alt="img" />
        <h2>{item.title}</h2>
        <p>{item.shortDescription}</p>
        <a href={`./${item.category}/${item.id}`} className="btn btn-main">
          <h3> View product</h3>
        </a>
      </article>
    </section>
  );
}
