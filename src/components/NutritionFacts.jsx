import React from "react"; // no need to import react since version 17

export default function NutritionFactsSection({ product }) {
  const calories = product.nutrition_facts[0];
  // this simple line of code, is formated as 3 lines by Prettier, giving the clue that needs refactor -1
  const otherData = product.nutrition_facts.slice(
    1,
    product.nutrition_facts.length
  );

  return (
    <section className="section-nutrition_facts">
      <h2>Nutrition Facts</h2>
      <div className="separator" />
      <div className="calories">
        <h2>Calories</h2>
        <h1>{calories.value}</h1>
      </div>

      <div className="separator" />
      <h2 className="daily_value">% Daily Value*</h2>

      <table>
        <tbody>
          {otherData.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <p className="value">{item.label}</p>
                </td>
                <td>
                  <p className="value">{item.value}%</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
