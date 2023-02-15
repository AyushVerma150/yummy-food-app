import CartIcon from "../../Cart/CartIcon";
import classes from "./Header.module.css";

const HeaderButton = ({ openCart, cartCount }) => {
  const openCartHandler = () => {
    openCart(true);
  };

  return (
    <div className={classes["header-button"]} onClick={openCartHandler}>
      <CartIcon className={classes["cart-icon"]} />
      <span>Your Cart</span>
      <span className={classes["cart-count"]}>{cartCount}</span>
    </div>
  );
};

export default HeaderButton;
