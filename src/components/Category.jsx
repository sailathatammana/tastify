import React from "react";

export default function Category({ item }) {
  const imageObject = require(`../assets/categories/${item.image}`);
  const imageURL = imageObject.default;
  return (
    <section className="section-menu ">
      <article>
        <img className="catimg" src={imageURL} alt="img" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        {/* There is a BrowserRouter Link component from React router it gives you benefits like auto go back features */}
        <a href={`./${item.name}`} className="btn btn-main">
          <h3> View {item.name}</h3>
        </a>
      </article>
    </section>
  );
}
