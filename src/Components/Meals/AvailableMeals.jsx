import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = ({ cartItems, addItemsToCart }) => {
  const [mealItems, setMealItems] = useState([
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      count: 0,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      count: 0,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      count: 0,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      count: 0,
    },
  ]);

  const onAddCountClick = (mealInfo, count = 0) => {
    const newState = mealItems.map((item) => {
      if (item.name === mealInfo.name) {
        // Increment the clicked counter
        return {
          ...item,
          count: count === 0 ? item.count + 1 : count,
        };
      } else {
        // The rest haven't changed
        return item;
      }
    });
    setMealItems(newState);
  };

  const onRemoveCountClick = (mealInfo) => {
    const newState = mealItems.map((item) => {
      if (item.name === mealInfo.name && item.count > 0) {
        // Increment the clicked counter
        return {
          ...item,
          count: item.count - 1,
        };
      } else {
        // The rest haven't changed
        return item;
      }
    });
    setMealItems(newState);
  };

  useEffect(() => {
    if(cartItems.length){
      console.log("Cart Items has changed, Go Checkout!", cartItems)
    }
  }, [cartItems]);

  return (
    <section className={classes.meals}>
      {mealItems.map((o, index) => {
        return (
          <MealItem
            item={o}
            addItemsToCart={addItemsToCart}
            addCountClick={onAddCountClick}
            key={"av-" + index + "-" + o.name}
            removeCountClick={onRemoveCountClick}
          />
        );
      })}
    </section>
  );
};

export default AvailableMeals;
