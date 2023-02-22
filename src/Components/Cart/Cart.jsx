import MealItem from "../Meals/MealItem";
import classes from "./Cart.module.css";
import CartForm from "./CartForm";
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
                    {/* <CartForm /> */}
                  </div>
                  {/* Right Side  */}
                  <div>
                    <h3 style={{ textAlign: "right", color: "#ff6f31" }}>
                      {"$" + totalCost.toFixed(2)}
                    </h3>
                  </div>
                </div>
              </>
            </>
          )}
        </div>
        {cartItems.length > 0 && (
          <>
            <CartForm openCart={openCart} />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
