import CartIcon from "../../Cart/CartIcon";
import classes from "./Header.module.css";

const HeaderButton = () => {
  return (
    <div className={classes["header-button"]}>
      <CartIcon className={classes["cart-icon"]} />
      <span>Your Cart</span>
      <span className={classes["cart-count"]}>3</span>
    </div>
  );
};

export default HeaderButton;
