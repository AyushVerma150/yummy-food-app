import classes from "./Cart.module.css";

const CartForm = ({ openCart }) => {
  return (
    <>
      <form className={classes["form-control"]}>
        <div>
          <label htmlFor="firstName">
            <i style={{ fontWeight: "lighter" }}>{"Full Name"}</i>
            <sup>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            id="firstName"
            name="firstName"
            type={"text"}
            placeholder="Enter Full Name"
          />
        </div>
        <div>
          <label htmlFor="billAddr">
            <i style={{ fontWeight: "lighter" }}>{"Billing Address"}</i>
            <sup>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            id="billAddr"
            name="billAddr"
            type={"text"}
            placeholder="Enter Billing Address"
          />
        </div>
        <div>
          <label htmlFor="postalCode">
            <i style={{ fontWeight: "lighter" }}>{"Postal Code"}</i>
            <sup>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            id={"postalCode"}
            name="postalCode"
            type={"text"}
            placeholder="Enter Postal Code"
          />
        </div>
        <div>
          <label htmlFor="city">
            <i style={{ fontWeight: "lighter" }}>{"City"}</i>
            <sup>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            id={"city"}
            name="city"
            type={"text"}
            placeholder={"Enter City"}
          />
        </div>
      </form>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "right",
          gridGap: "12px",
          padding: "5px 5px",
        }}
      >
        <button
          onClick={() => {
            openCart(false);
          }}
          className={classes.close}
        >
          Close
        </button>
        <button
          onClick={() => {
            openCart(false);
          }}
          className={classes.order}
        >
          Order
        </button>
      </div>
    </>
  );
};

export default CartForm;
