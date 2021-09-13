import Hero from "../components/Hero";
import CategoryData from "../data/categories.json";
import CategorySection from "../components/Category";

export default function HomePage() {
  const CategoriesList = CategoryData.map((item) => (
    <CategorySection key={item.id} item={item} />
  ));

  // space between const, methods and return
  return (
    <div>
      <Hero />
      {CategoriesList}
    </div>
  );
}
