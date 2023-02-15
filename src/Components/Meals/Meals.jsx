import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ({ addItemsToCart }) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals addItemsToCart={addItemsToCart} />
    </>
  );
};

export default Meals;
