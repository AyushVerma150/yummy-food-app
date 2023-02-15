import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ({ cartItems, addItemsToCart }) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals cartItems={cartItems} addItemsToCart={addItemsToCart} />
    </>
  );
};

export default Meals;
