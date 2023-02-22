import { useState } from "react";
import MealItem from "../Meals/MealItem";
import classes from "./Cart.module.css";
import CartForm from "./CartForm";
const Cart = ({ cartItems, openCart, addItemsToCart }) => {
  const [orderClicked, setOrderClicked] = useState(false);
  let totalCost = 0;
  cartItems.map((o) => {
    totalCost += o.count * o.price;
    return "";
  });

  const closeOrderDialog = () => {
    setOrderClicked(false);
  };

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          openCart(false);
        }}
      />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{"Cart Details"}</h2>
        </header>
        <div className={classes.content}>
          {!cartItems.length ? (
            <p style={{ textAlign: "center" }}>Your Cart is empty!</p>
          ) : (
            <>
              {cartItems.map((item) => {
                return (
                  <MealItem
                    item={item}
                    cartEnabled={true}
                    addItemsToCart={addItemsToCart}
                  />
                );
              })}
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4>Total Amount</h4>
                  </div>
                  <div>
                    <h3
                      style={{
                        textAlign: "right",
                        color: "#ff6f31",
                        fontStyle: "italic",
                      }}
                    >
                      {"$" + totalCost.toFixed(2)}
                    </h3>
                  </div>
                </div>
              </>
            </>
          )}
        </div>
        {orderClicked && (
          <>
            <CartForm openCart={openCart} closeOrderDialog={closeOrderDialog} />
          </>
        )}
        {!orderClicked && (
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "right",
              gridGap: "12px",
              padding: "5px 5px",
            }}
          >
            <button
              onClick={() => {
                openCart(false);
              }}
              className={classes.close}
            >
              Close
            </button>
            <button
              onClick={() => {
                setOrderClicked(true);
              }}
              className={classes.order}
            >
              Order
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
