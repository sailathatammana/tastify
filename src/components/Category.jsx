import React from "react";
import { Link } from "react-router-dom";

export default function Category({ item }) {
  const imageObject = require(`../assets/categories/${item.image}`);
  const imageURL = imageObject.default;

  return (
    <article className="menu">
      <img className="image" src={imageURL} alt="img" />
      <div className="container">
        <div className="center">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Link to={`./${item.name}`}>View {item.name}</Link>
        </div>
      </div>
    </article>
  );
}
