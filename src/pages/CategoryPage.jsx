import React from "react";
import { useParams } from "react-router-dom";

import ProductData from "../data/products.json";
import CategoryData from "../data/categories.json";
import Products from "../components/Products";

export default function CategoryPage() {
  const { category } = useParams();

  function getRelatedFood(array, categoryOfFood) {
    return array.filter((item) => {
      return item.category === categoryOfFood;
    });
  }

  function getCategoryDescription(array, categoryOfFood) {
    return array.filter((item) => {
      return item.name === categoryOfFood;
    })[0].description;
  }
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
