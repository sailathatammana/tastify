import React from "react";
import Table from "./Table";

export default function NutritionFacts({ product }) {
  const nutritionRows = product.nutrients.map((item) => (
    <Table key={item.id} item={item} />
  ));

  return (
    <table className="nutrition-table">
      <caption>Nutrition Facts</caption>
      <tbody>
        <tr>
          <td>Serving size</td>
          <td>{product.servingSize}g</td>
        </tr>
        <tr>
          <td>Serving per Container</td>
          <td>{product.servingSizePerContainer}g</td>
        </tr>
        <tr>
          <td className="main-text">Amount Per Serving</td>
        </tr>
        <tr className="thick-row-top">
          <td>
            <b>Calories</b>
          </td>
          <td>
            <b>{product.calories}</b>
          </td>
        </tr>
        <tr className="thick-row-top">
          <td colSpan="3" className="main-text align-right">
            % Daily Value
          </td>
        </tr>
        {nutritionRows}
      </tbody>
    </table>
  );
}
