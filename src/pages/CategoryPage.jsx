import React from "react";
import { useParams } from "react-router-dom";

import ProductData from "../data/products.json";
import CategoryData from "../data/categories.json";
import Products from "../components/Products";

export default function CategoryPage() {
  const { category } = useParams();

  // Good use of functional programming, but if the user cannot change the "plats" (whatever that means) or the description
  // then this can be just derived state, just like we did with activeList and pendingList in the shopping todolist
  // remind me to showcase how to refactor this even further, but again nice and clean pure functions
  function getRelatedFood(array, categoryOfFood) {
    return array.filter((item) => item.category === categoryOfFood);
  }

  function getCategoryDescription(array, categoryOfFood) {
    return array.filter((item) => item.name === categoryOfFood)[0].description;
  }

  // what is plats?. Naming -1
  const plats = getRelatedFood(ProductData, category);
  const description = getCategoryDescription(CategoryData, category);

  const ProductsList = plats.map((item) => (
    <Products key={item.id} item={item} />
  ));

  return (
    <main className="page-category">
      <section className="section-header">
        <h2>{category}</h2>
      </section>
      <section className="section-description">
        <p>{description}</p>
      </section>
      {ProductsList}
    </main>
  );
}
