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

  // if you having a single line of return, you can skip the return entirely inside .map, .filter, .reduce, etc.
  function getRelatedItem(id) {
    return ProductData.filter((item) => item.id === id);
  }

  // again, if a function is called only 1 in the lifetime of the component you can use derived state.
  const product = getRelatedItem(iDNumber)[0];

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
