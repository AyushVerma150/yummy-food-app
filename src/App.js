import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartEnabled, setCartEnabled] = useState(false);

  const addItemToCart = (item) => {
    const isPresent = cartItems.find((o) => o.name === item.name);
    if (isPresent) {
      const newState = cartItems.map((o) => {
        if (o.name === item.name) {
          return {
            ...item,
            count: item.count + 1,
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

  const removeItemFromCart = (item) => {
    const isPresent = cartItems.find((o) => o.name === item.name);
    if (isPresent && isPresent.count > 1) {
      const newState = cartItems.map((o) => {
        if (o.name === item.name) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return o;
      });
      setCartItems(newState);
    } else if (isPresent && isPresent.count === 1) {
      setCartItems(cartItems.filter((o) => o.name !== item.name));
    }
  };

  return (
    <div>
      {cartEnabled && (
        <Cart
          addItemsToCart={addItemToCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          openCart={setCartEnabled}
          removeItemFromCart={removeItemFromCart}
        />
      )}
      <Header cartCount={cartItems.length} openCart={setCartEnabled} />
      <Meals
        cartItems={cartItems}
        addItemsToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
    </div>
  );
};

export default App;
