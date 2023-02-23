import classes from "./MealItem.module.css";
import KadhaiPaneer from "../../Assets/kadai-paneer.jpg";
import DalMakhni from "../../Assets/dal-makhni.jpg";
import Sushi from "../../Assets/sushi.jpeg";
const MealItem = ({
  item,
  cartItems,
  addCountClick,
  addItemsToCart,
  removeCountClick,
  removeItemFromCart,
  cartEnabled = false,
}) => {
  const nameToImgMapper = (name) => {
    if (name.toLowerCase() === "kadai paneer") return KadhaiPaneer;
    else if (name.toLowerCase() === "sushi") return Sushi;
    else return DalMakhni;
  };
  const itemInCart = cartItems?.find((o) => o.name === item.name) ?? null;
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
          {cartEnabled && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minWidth: "70px",
              }}
            >
              <div>
                <button
                  disabled={item.count >= 10}
                  onClick={() => {
                    addItemsToCart(item);
                  }}
                  className={classes.badge}
                >
                  {"+"}
                </button>
              </div>
              <div>
                <button
                  disabled={item.count <= 0}
                  onClick={() => {
                    removeItemFromCart(item);
                  }}
                  className={classes.badge}
                >
                  {"-"}
                </button>
              </div>
            </div>
          )}
          {!cartEnabled && (
            <div className={classes["zoom-effect-container"]}>
              <div className={classes["image-card"]}>
                <img src={nameToImgMapper(item.name)} alt={item.name} />
              </div>
              <button
                onClick={() => {
                  // update Item Count

                  if (!itemInCart) addItemsToCart(item);
                }}
                className={classes["add-item"]}
              >
                {itemInCart ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        fontSize: "20px",
                        minWidth: "15px",
                        marginTop: "-2px",
                        outline: "none",
                        border: "none",
                        background: "transparent",
                        color: "white",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItemFromCart(item);
                      }}
                    >
                      -
                    </button>
                    <div
                      style={{
                        fontWeight: "bold",
                        fonrSize: "18px !important",
                        fontStyle: "italic",
                      }}
                    >
                      {itemInCart.count}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItemsToCart(item);
                      }}
                      style={{
                        fontSize: "20px",
                        minWidth: "15px",
                        marginTop: "-2px",
                        outline: "none",
                        border: "none",
                        background: "transparent",
                        color: "white",
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  "ADD"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default MealItem;
