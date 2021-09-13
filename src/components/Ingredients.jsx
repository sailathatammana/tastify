import React from "react";

export default function IngredientsSection({ product }) {
  return (
    <section className="section-ingredients">
      <h3>Ingredients</h3>
      <ul>
        {/* No logic inside JSX, use a const -1  */}
        {/* Not for using logic inside the JSX but for consistency */}
        {/* On CategoryPage.jsx you create const ProductsList. Why dont use the same code style here?*/}
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
