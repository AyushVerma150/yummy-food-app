import { useEffect, useState } from "react";
import MealItem from "../Meals/MealItem";
import classes from "./Cart.module.css";
import CartForm from "./CartForm";

import orderInProgressImg from "../../Assets/in-progress.png";
import OrderComfirmedImg from "../../Assets/order-confirmed.png";

const Cart = ({
  cartItems,
  openCart,
  addItemsToCart,
  setCartItems,
  removeItemFromCart,
}) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderInProgress, setOrderInProgress] = useState(false);
  const [orderClicked, setOrderClicked] = useState(false);
  let totalCost = 0;
  cartItems.map((o) => {
    totalCost += o.count * o.price;
    return "";
  });

  const closeOrderDialog = () => {
    setOrderClicked(false);
  };

  const punchOutOrder = async () => {
    try {
      const response = await fetch(
        "https://food-yumm-app-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartItems),
        }
      );
      if (!response.ok) {
        console.log("Some error Occured, while ordering!");
      }
      const result = await response.json();

      if (result) {
        // reset the cart
        setCartItems([]);
        setOrderConfirmed(true);
        setOrderInProgress(false);
        console.log("Order has been added : ", result);
      }
    } catch (err) {
      setOrderInProgress(false);
      console.log("Some error Occured, while ordering!", err);
    }
  };

  const onOrderClick = async () => {
    try {
      setTimeout(async () => {
        setOrderInProgress(true);
        await punchOutOrder();
      }, 2500);
    } catch (err) {
      console.log("Some error Occured, while ordering!", err);
    }
  };

  useEffect(() => {
    return () => {
      setOrderConfirmed(false);
      setOrderClicked(false);
    };
  }, []);

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
        {!orderConfirmed && !orderInProgress && (
          <>
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
                        removeItemFromCart={removeItemFromCart}
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
                <CartForm
                  openCart={openCart}
                  closeOrderDialog={closeOrderDialog}
                  onOrderClicked={onOrderClick}
                />
              </>
            )}
            {!orderClicked && cartItems.length > 0 && (
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
          </>
        )}
        {orderInProgress && (
          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px 10px",
            }}
          >
            <img
              preload
              alt="Order In Progress"
              style={{ height: "200px", width: "200px" }}
              src={orderInProgressImg}
            />
            <p>Please wait while we confirm your Order!</p>
          </div>
        )}
        {orderConfirmed && !orderInProgress && (
          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              padding: "10px 10px",
            }}
          >
            <img
              preload
              src={OrderComfirmedImg}
              alt="Order Confirmed"
              style={{ height: "200px", width: "200px" }}
            />
            <p>Order Confirmed! We will keep you updated.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
