import classes from "./MealItem.module.css";

const MealItem = ({
  item,
  addCountClick,
  removeCountClick,
  addItemsToCart,
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
          <div className={classes.desc}>
            <span>{item.description}</span>
          </div>
          <div className={classes.cost}>
            <span>{"$" + item.price}</span>
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
            <div className={classes["item-count"]}>
              <span className={classes.desc}>{item.count}</span>
            </div>
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
        </div>
      </div>
      <hr />
    </>
  );
};

export default MealItem;
