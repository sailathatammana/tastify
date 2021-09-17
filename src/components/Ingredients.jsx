import React from "react";

export default function IngredientsSection({ product }) {
  const ingredients = product.ingredients.map((ingredient) => {
    return (
      <li key={ingredient}>
        <div className="btn btn-ghost pill">
          <p classname="pills">{ingredient}</p>
        </div>
      </li>
    );
  });

  return (
    <section className="section-ingredients">
      <h3>Ingredients</h3>
      <ul>{ingredients}</ul>
    </section>
  );
}
