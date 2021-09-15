import React from "react";
import { useParams } from "react-router-dom";

import ProductData from "../data/products.json";
import ProductDescription from "../components/ProductDescription";
import Ingredients from "../components/Ingredients";
import NutritionFacts from "../components/NutritionFacts";

export default function ProductPage() {
  const { category } = useParams();
  const { id } = useParams();
  const iDNumber = Number.parseInt(id);
  const product = ProductData.filter((item) => item.id === iDNumber)[0];

  return (
    <main className="page-product">
      <ProductDescription product={product} />
      <Ingredients product={product} />
      <NutritionFacts product={product} />
      <a className="btn btn-main btn-300" href={`../${category}`}>
        <h3> Go back </h3>
      </a>
    </main>
  );
}
