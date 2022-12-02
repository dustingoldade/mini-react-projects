import { useState } from "react";
import jsonText from "../../locales/en.json";

const { AverageOfArry_HelperTextError, AverageOfArry_Average } = jsonText;

const cleanString = (string) => {
  const trimmedString = string.trim();
  //Reject on repeating commas
  if (trimmedString.includes(",,")) {
    return false;
  }
  //Reject  on starting or ending with comma
  if (
    trimmedString[0] === "," ||
    trimmedString[trimmedString.length - 1] === ","
  ) {
    return false;
  }
  //Returns true only if numbers inbetween commas
  if (!+trimmedString.replaceAll(",", "")) {
    return false;
  }
  return trimmedString;
};

const returnAverage = (string) => {
  const array = string.split(",").map((num) => +num);
  const total = array.reduce((acc, num) => (acc += num), 0);
  const average = total / array.length;
  return average.toFixed(2);
};

const useAverageOfArray = () => {
  const [numberToShow, setNumberToShow] = useState(AverageOfArry_Average);
  const [inputValue, setInputValue] = useState("");
  const [showErrorInput, setShowErrorInput] = useState(false);

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const showNumber = () => {
    if (!cleanString(inputValue)) {
      setShowErrorInput(true);
      return;
    }
    setNumberToShow(AverageOfArry_Average + returnAverage(inputValue));
    setShowErrorInput(false);
  };
  const errorHelperText = showErrorInput ? AverageOfArry_HelperTextError : "";

  return {
    numberToShow,
    inputValue,
    showErrorInput,
    showNumber,
    errorHelperText,
    inputValueHandler,
  };
};

export default useAverageOfArray;
