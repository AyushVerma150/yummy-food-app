import mealsImg from "../../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = ({ cartCount }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodYum</h1>
        <HeaderButton cartCount={cartCount} className={classes.bump} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt={"A Table full of food!"} />
      </div>
    </>
  );
};

export default Header;
