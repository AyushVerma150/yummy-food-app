import CartIcon from "../../Cart/CartIcon";
import classes from "./Header.module.css";

const HeaderButton = ({ cartCount }) => {
  console.log(
    "🚀 ~ file: HeaderButton.jsx:5 ~ HeaderButton ~ cartCount",
    cartCount
  );
  return (
    <div className={classes["header-button"]}>
      <CartIcon className={classes["cart-icon"]} />
      <span>Your Cart</span>
      <span className={classes["cart-count"]}>{cartCount}</span>
    </div>
  );
};

export default HeaderButton;
