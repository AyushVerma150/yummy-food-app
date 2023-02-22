import { useRef } from "react";
import useInputHook from "../hooks/use-input-hook";
import classes from "./Cart.module.css";

const CartForm = ({ openCart, onOrderClicked, closeOrderDialog }) => {
  const firstNameRef = useRef();
  const billAddRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const onOrderClickHandler = () => {
    if (firstName === "") {
      firstNameRef.current.focus();
    } else if (billAddr === "") {
      billAddRef.current.focus();
    } else if (postalCode === "") {
      postalCodeRef.current.focus();
    } else if (city === "") {
      cityRef.current.focus();
    }

    if (!firstNameValid || !billAddrValid || !postalCodeValid || !cityValid) {
      return;
    }

    onOrderClicked();
  };

  const {
    value: firstName,
    isValid: firstNameValid,
    hasError: firstNameError,
    onBlurHandler: firstNameBlurHandler,
    onChangeHandler: firstNameChangeHandler,
  } = useInputHook((val) => val.trim() !== "");

  const {
    value: billAddr,
    isValid: billAddrValid,
    hasError: billAddrError,
    onBlurHandler: billAddrBlurHandler,
    onChangeHandler: billAddrChangeHandler,
  } = useInputHook((val) => val.trim() !== "");

  const {
    value: postalCode,
    isValid: postalCodeValid,
    hasError: postalCodeError,
    onBlurHandler: postalCodeBlurHandler,
    onChangeHandler: postalCodeChangeHandler,
  } = useInputHook((val) => val.trim() !== "");

  const {
    value: city,
    isValid: cityValid,
    hasError: cityError,
    onBlurHandler: cityBlurHandler,
    onChangeHandler: cityChangeHandler,
  } = useInputHook((val) => val.trim() !== "");

  return (
    <>
      <form className={classes["form-control"]}>
        <div>
          <span
            style={{
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "bolder",
              marginBottom: "5px",
            }}
          >
            Checkout Details
          </span>
        </div>
        <div>
          <label htmlFor="firstName">
            <i style={{ fontWeight: "lighter" }}>{"Full Name"}</i>
            <sup style={{ color: "red" }}>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            value={firstName}
            ref={firstNameRef}
            placeholder="Enter Full Name"
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameError && (
            <span style={{ color: "red", fontSize: "14px", padding: "2px" }}>
              Please enter a valid Full Name.
            </span>
          )}
        </div>
        <div>
          <label htmlFor="billAddr">
            <i style={{ fontWeight: "lighter" }}>{"Billing Address"}</i>
            <sup style={{ color: "red" }}>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <textarea
            rows={"2"}
            cols={"33"}
            name="billAddr"
            id={"billAddr"}
            value={billAddr}
            ref={billAddRef}
            onBlur={billAddrBlurHandler}
            onChange={billAddrChangeHandler}
            placeholder="Enter Postal Code"
          />
          <div>
            {billAddrError && (
              <span style={{ color: "red", fontSize: "14px", padding: "2px" }}>
                Please enter a valid Billing Address.
              </span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="postalCode">
            <i style={{ fontWeight: "lighter" }}>{"Postal Code"}</i>
            <sup style={{ color: "red" }}>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            type={"text"}
            id={"postalCode"}
            name="postalCode"
            value={postalCode}
            ref={postalCodeRef}
            onBlur={postalCodeBlurHandler}
            placeholder={"Enter Postal Code"}
            onChange={postalCodeChangeHandler}
          />
          {postalCodeError && (
            <span style={{ color: "red", fontSize: "14px", padding: "2px" }}>
              Please enter a valid Postal Code.
            </span>
          )}
        </div>
        <div>
          <label htmlFor="city">
            <i style={{ fontWeight: "lighter" }}>{"City"}</i>
            <sup style={{ color: "red" }}>
              &nbsp;<b>{"*"}</b>
            </sup>
          </label>
          <input
            id={"city"}
            name="city"
            type={"text"}
            value={city}
            ref={cityRef}
            onBlur={cityBlurHandler}
            placeholder={"Enter City"}
            onChange={cityChangeHandler}
          />
          {cityError && (
            <span style={{ color: "red", fontSize: "14px", padding: "2px" }}>
              Please enter a valid city.
            </span>
          )}
        </div>
        <div>
          <span>
            <b>Note:</b>
            <i>
              * represents a
              <span style={{ color: "red", fontWeight: "bolder" }}>
                {" required "}
              </span>
              field.
            </i>
          </span>
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
        <button onClick={closeOrderDialog} className={classes.close}>
          Cancel
        </button>
        <button onClick={onOrderClickHandler} className={classes.order}>
          Confirm
        </button>
      </div>
    </>
  );
};

export default CartForm;
