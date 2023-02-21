import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <ul style={{ textAlign: "left", fontWeight: "100", fontSize: "14px" }}>
        <span>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </span>
        <br />
        <br />
        <span>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </span>
      </ul>
    </section>
  );
};

export default MealsSummary;
