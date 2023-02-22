import { useState } from "react";

const useInputHook = (validateInputFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateInputFn(enteredValue);
  const hasError = inputIsTouched && !inputIsValid;

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setInputIsTouched(true);
  };

  const resethandler = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };

  return {
    hasError,
    resethandler,
    onBlurHandler,
    onChangeHandler,
    value: enteredValue,
    isValid: inputIsValid,
  };
};

export default useInputHook;
