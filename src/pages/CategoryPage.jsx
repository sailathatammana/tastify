import React from "react";
import { useParams } from "react-router-dom";

import ProductData from "../data/products.json";
import CategoryData from "../data/categories.json";
import Products from "../components/Products";

export default function CategoryPage() {
  const { category } = useParams();
  const products = ProductData.filter((item) => item.category === category);
  const description = CategoryData.filter((item) => item.name === category)[0]
    .description;

  const ProductsList = products.map((item) => (
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
