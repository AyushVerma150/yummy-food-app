import MealItem from "../Meals/MealItem";
import classes from "./Cart.module.css";
const Cart = ({ cartItems, openCart, addItemsToCart }) => {
  let totalCost = 0;
  cartItems.map((o) => {
    totalCost += o.count * o.price;
    return "";
  });
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
                  {/* Left Side  */}
                  <div>
                    <h4>Total Amount</h4>
                  </div>
                  {/* Right Side  */}
                  <div>
                    <h3 style={{ textAlign: "right" }}>
                      {"$" + totalCost.toFixed(2)}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "right",
                        gridGap: "12px",
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
                          openCart(false);
                        }}
                        className={classes.order}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
