import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartEnabled, setCartEnabled] = useState(false);

  const addItemToCart = (item, insideCart = false) => {
    const isPresent = cartItems.find((o) => o.name === item.name);
    if (isPresent) {
      const newState = cartItems.map((o) => {
        if (o.name === item.name) {
          return {
            ...item,
            count:
              item.count === 0 ? 1 : insideCart ? item.count + 1 : item.count,
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
          count: item.count === 0 ? 1 : item.count,
        },
      ]);
    }
  };

  useEffect(() => {
    console.log("In App.js");
  }, []);

  return (
    <div>
      {cartEnabled && (
        <Cart
          addItemsToCart={addItemToCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          openCart={setCartEnabled}
        />
      )}
      <Header cartCount={cartItems.length} openCart={setCartEnabled} />
      <Meals cartItems={cartItems} addItemsToCart={addItemToCart} />
    </div>
  );
};

export default App;
