import { useEffect, useState, useCallback } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = ({ cartItems, addItemsToCart, removeItemFromCart }) => {
  const [error, setError] = useState(null);
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const transformData = useCallback((data) => {
    const mealsLoaded = [];
    for (const key in data) {
      const mealInfo = data[key];
      mealsLoaded.push({ ...mealInfo, id: key, count: 0 });
    }
    setMealItems(mealsLoaded);
  }, []);

  const fetchYourFavMeals = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const mealResponse = await fetch(
        "https://food-yumm-app-default-rtdb.firebaseio.com/meals.json"
      );
      setIsLoading(false);

      if (!mealResponse.ok) {
        setError("something went wrong");
      }
      const results = await mealResponse.json();
      transformData(results);
      console.log("The response is : ", results);
    } catch (err) {
      setIsLoading(false);
      setError("something went wrong");
      console.log("err occured : ", err);
    }
  }, [transformData]);

  useEffect(() => {
    // load Meals Data
    fetchYourFavMeals();
  }, [fetchYourFavMeals]);

  useEffect(() => {
    if (cartItems.length) {
      const prevState = mealItems;
      cartItems.forEach((i) => {
        prevState.forEach((o) => {
          if (o.name === i.name) {
            o.count = i.count;
          }
        });
      });
      setMealItems(prevState);
    } else {
      // reset the items

      setMealItems((prev) => {
        const updatedState = [];
        prev.map((o) => {
          updatedState.push({
            ...o,
            count: 0,
          });
          return null;
        });

        return updatedState;
      });
    }
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <section className={classes.meals}>
      {!error && isLoading && (
        <p
          style={{
            color: "#ff6f31",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "italic",
          }}
        >
          Catch a breath while we load all your favourite dishes...
        </p>
      )}
      {!error &&
        !isLoading &&
        mealItems.length > 0 &&
        mealItems.map((o, index) => {
          return (
            <MealItem
              item={o}
              cartItems={cartItems}
              addItemsToCart={addItemsToCart}
              removeItemFromCart={removeItemFromCart}
              addCountClick={onAddCountClick}
              key={"av-" + index + "-" + o.name}
              removeCountClick={onRemoveCountClick}
            />
          );
        })}

      {!error && !isLoading && mealItems.length === 0 && (
        <p style={{ textAlign: "center" }}>
          Looks like we are sold out!
          <br />
          <span style={{ fontStyle: "italic", fontWeight: "bolder" }}>
            Come back Later.
          </span>
        </p>
      )}
      {error && !isLoading && (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Oops! we ran into an issue.
          <br />
          <span
            style={{
              fontWeight: "bolder",
              fontStyle: "italic",
              color: "#c30000",
            }}
          >
            Its not you, its us!
          </span>
        </p>
      )}
    </section>
  );
};

export default AvailableMeals;
