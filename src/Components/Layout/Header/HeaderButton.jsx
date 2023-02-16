import { useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./Header.module.css";

const HeaderButton = ({ openCart, cartCount }) => {
  const [btnClass, setBtnClass] = useState(`${classes["header-button"]}`);
  const openCartHandler = () => {
    openCart(true);
  };

  useEffect(() => {
    setBtnClass(`${classes["header-button"]} ${classes.bump}`);
    const timer = setTimeout(() => {
      setBtnClass(`${classes["header-button"]}`);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCount]);

  return (
    <button className={btnClass} onClick={openCartHandler}>
      <CartIcon className={classes["cart-icon"]} />
      <span>Your Cart</span>
      <span className={classes["cart-count"]}>{cartCount}</span>
    </button>
  );
};

export default HeaderButton;
