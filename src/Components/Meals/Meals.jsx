import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ({ cartItems, addItemsToCart, removeItemFromCart }) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals
        cartItems={cartItems}
        addItemsToCart={addItemsToCart}
        removeItemFromCart={removeItemFromCart}
      />
    </>
  );
};

export default Meals;
