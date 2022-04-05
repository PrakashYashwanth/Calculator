import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Calculator.css";
import {
  setInputValue,
  setAnswerValue,
  setErrorValue,
  setPrevAnswerValue,
  setCalculatedValue,
} from "../../redux/calculator/calculatorActions";

const Calculator = () => {
  const errorExists = useSelector((state) => state.errorExists);
  const answerValue = useSelector((state) => state.answerValue);
  const inputValue = useSelector((state) => state.inputValue);
  const prevAnswerValue = useSelector((state) => state.prevAnswerValue);
  const calculatedAnswerStatus = useSelector(
    (state) => state.calculatedAnswerStatus
  );

  const dispatch = useDispatch();

  let navigate = useNavigate();
  useEffect(() => {
    try {
      // eslint-disable-next-line no-eval
      const evaluatedValue = eval(inputValue);
      dispatch(setErrorValue(false));
      if (evaluatedValue === Infinity) {
        dispatch(setAnswerValue("Can't divide a number by zero"));
      } else if (inputValue === "") {
        dispatch(setAnswerValue("0"));
      } else dispatch(setAnswerValue(evaluatedValue || answerValue));
    } catch (error) {
      dispatch(setErrorValue(true));
    }
    dispatch(setCalculatedValue(false));
  }, [dispatch, answerValue, inputValue]);

  useEffect(() => {
    if (!sessionStorage.getItem("User_Name")) {
      navigate("/");
    }
  });

  const validateBracket = () => {
    const openBracketsCount = inputValue.split("(").length - 1;
    const closingBracketsCount = inputValue.split(")").length - 1;
    if (openBracketsCount <= closingBracketsCount) {
      dispatch(setInputValue(`${inputValue}(`));
    } else {
      dispatch(setInputValue(`${inputValue})`));
    }
  };

  const handleChange = (e) => {
    const operatorsArray = ["*", "/", "+", "-"];
    if (
      operatorsArray.includes(e.target.value) &&
      (operatorsArray.includes(inputValue.substring(inputValue.length - 1)) ||
        answerValue === "0")
    ) {
      dispatch(
        setInputValue(
          `${
            answerValue === "0"
              ? "0"
              : inputValue.slice(0, inputValue.length - 1)
          }${e.target.value}`
        )
      );
    } else if (inputValue === "0" && e.target.value !== 0) {
      dispatch(setInputValue(`${e.target.value}`));
    } else if (!(inputValue === "" && e.target.value === "0")) {
      dispatch(setInputValue(`${inputValue}${e.target.value}`));
    }
  };

  return (
    <div>
      <Link
        to={"/"}
        className="logoutLink"
        onClick={() => {
          sessionStorage.setItem("User_Name", "");
        }}
      >
        <h3 className="logoutText">Log Out</h3>
      </Link>
      <div className="heading">
        <h1>Calculator</h1>
      </div>
      <ul>
        <div style={{ display: "flex" }}>
          <li style={{ flex: "1" }}>AC - Clear All</li>
          <li style={{ flex: "1" }}>Del - Clear Single Item</li>
        </div>
        <li>ANS - Previous Answer</li>
      </ul>
      <div className="calculator-container">
        <div className="display" id="display">
          <span className="hint">{inputValue}</span>
          <span className="total">{errorExists ? "" : answerValue}</span>
        </div>

        <div className="button-grid">
          <button
            type="button"
            className="btn clear"
            onClick={() => {
              if (calculatedAnswerStatus) {
                dispatch(setPrevAnswerValue(answerValue));
              }
              dispatch(setInputValue(""));
              dispatch(setAnswerValue("0"));
            }}
          >
            AC
          </button>
          <button
            type="button"
            className="btn deleteSingle"
            onClick={() =>
              dispatch(
                setInputValue(inputValue.slice(0, inputValue.length - 1))
              )
            }
          >
            Del
          </button>
          <button
            type="button"
            className="btn modulo"
            onClick={() => dispatch(setInputValue(`${prevAnswerValue}`))}
          >
            ANS
          </button>
          <button
            type="button"
            className="btn divide orange"
            value={"/"}
            onClick={(e) => handleChange(e)}
          >
            /
          </button>
          <button
            type="button"
            className="btn seven"
            value={"7"}
            onClick={(e) => handleChange(e)}
          >
            7
          </button>
          <button
            type="button"
            className="btn eight"
            value={"8"}
            onClick={(e) => handleChange(e)}
          >
            8
          </button>
          <button
            type="button"
            className="btn nine"
            value={"9"}
            onClick={(e) => handleChange(e)}
          >
            9
          </button>
          <button
            type="button"
            className="btn multiply orange"
            value={"*"}
            onClick={(e) => handleChange(e)}
          >
            x
          </button>
          <button
            type="button"
            className="btn four"
            value={"4"}
            onClick={(e) => handleChange(e)}
          >
            4
          </button>
          <button
            type="button"
            className="btn five"
            value={"5"}
            onClick={(e) => handleChange(e)}
          >
            5
          </button>
          <button
            type="button"
            className="btn six"
            value={"6"}
            onClick={(e) => handleChange(e)}
          >
            6
          </button>
          <button
            type="button"
            className="btn subtract orange"
            value={"-"}
            onClick={(e) => handleChange(e)}
          >
            -
          </button>
          <button
            type="button"
            className="btn one"
            value={"1"}
            onClick={(e) => handleChange(e)}
          >
            1
          </button>
          <button
            type="button"
            className="btn two"
            value={"2"}
            onClick={(e) => handleChange(e)}
          >
            2
          </button>
          <button
            type="button"
            className="btn three"
            value={"3"}
            onClick={(e) => handleChange(e)}
          >
            3
          </button>
          <button
            type="button"
            className="btn plus orange"
            value={"+"}
            onClick={(e) => handleChange(e)}
          >
            +
          </button>
        </div>
        <div className="bottom-container">
          <button
            type="button"
            className="btn zero"
            value={"0"}
            onClick={(e) => handleChange(e)}
          >
            0
          </button>
          <button
            type="button"
            className="btn decimal"
            value={"."}
            onClick={(e) => handleChange(e)}
          >
            .
          </button>
          <button
            type="button"
            className="btn bracket"
            onClick={() => validateBracket()}
          >
            ()
          </button>
          <button
            type="button"
            className="btn equals orange"
            onClick={() => {
              if (!(answerValue === "Can't divide a number by zero")) {
                dispatch(setInputValue(`${answerValue}`));
                dispatch(setPrevAnswerValue(`${answerValue}`));
                dispatch(setCalculatedValue(true));
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
