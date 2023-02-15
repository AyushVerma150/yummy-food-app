import { useEffect, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length) {
      console.log("The Cart Items are : ", cartItems);
    }
  }, [cartItems]);

  const addItemToCart = (item) => {
    const isPresent = cartItems.find((o) => o.name === item.name);
    if (isPresent) {
      const newState = cartItems.map((o) => {
        if (o.name === item.name) {
          return {
            ...item,
            count: item.count === 0 ? 1 : item.count,
          };
        }
        return o;
      });
      setCartItems(newState);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...item,
          count: 1,
        },
      ]);
    }
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <Meals addItemsToCart={addItemToCart} />
    </div>
  );
};

export default App;
