import React from "react";

export default function IngredientsSection({ product }) {
  return (
    <section className="section-ingredients">
      <h3>Ingredients</h3>
      <ul>
        {product.ingredients.map((ingredient) => {
          return (
            <li>
              <div className="btn btn-ghost pill">
                <p classname="pills">{ingredient}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
