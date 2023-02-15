import classes from "./MealItem.module.css";

const MealItem = ({
  item,
  addCountClick,
  removeCountClick,
  addItemsToCart,
  cartEnabled = false,
}) => {
  return (
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
          <div className={classes.title}>
            <span>{item.name}</span>
          </div>
          {!cartEnabled && (
            <div className={classes.desc}>
              <span>{item.description}</span>
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minWidth: "120px",
            }}
          >
            <div className={classes.cost}>
              <span>{"$" + item.price}</span>
            </div>
            {cartEnabled && (
              <div className={classes["cart-count"]}>
                <span>{"x" + item.count}</span>
              </div>
            )}
          </div>
        </div>
        {/* Right Side  */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <button
                onClick={() => {
                  addCountClick(item);
                }}
                className={classes.badge}
              >
                {"+"}
              </button>
            </div>
            {!cartEnabled ? (
              <div className={classes["item-count"]}>
                <span className={classes.desc}>{item.count}</span>
              </div>
            ) : null}
            <div>
              <button
                onClick={() => {
                  removeCountClick(item);
                }}
                className={classes.badge}
              >
                {"-"}
              </button>
            </div>
          </div>
          {!cartEnabled && (
            <button
              onClick={() => {
                if (item.count === 0) addCountClick(item);
                // update Item Count
                addItemsToCart(item);
              }}
              className={classes["add-item"]}
            >
              Add to Cart
            </button>
          )}
          {cartEnabled && (
            <button className={classes["items-total"]}>
              {"$" + (item.price * item.count).toFixed(2)}
            </button>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default MealItem;
