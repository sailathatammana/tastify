import React from "react";

export default function NutritionFactsSection({ product }) {
  const nutritionFacts = product.nutrition_facts;
  const calories = product.nutrition_facts[0];
  const otherData = nutritionFacts.slice(1, nutritionFacts.length);
  const TablePercentage = otherData.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <p>{item.label}</p>
        </td>
        <td>
          <p>{item.value}%</p>
        </td>
      </tr>
    );
  });

  return (
    <section className="section-nutrition_facts">
      <h2>Nutrition Facts</h2>
      <div className="separator" />
      <div className="calories">
        <h2>Calories</h2>
        <h1>{calories.value}</h1>
      </div>
      <div className="separator" />
      <h2 className="daily_value">% Daily Value per*</h2>
      <table>
        <tbody>{TablePercentage}</tbody>
      </table>
    </section>
  );
}
