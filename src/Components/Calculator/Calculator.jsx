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
} from "../../redux/calculator/calculatorActions";

const Calculator = () => {
  const errorExists = useSelector((state) => state.errorExists);
  const answerValue = useSelector((state) => state.answerValue);
  const inputValue = useSelector((state) => state.inputValue);
  const prevAnswerValue = useSelector((state) => state.prevAnswerValue);

  console.log(prevAnswerValue);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    try {
      dispatch(setErrorValue(false));
      dispatch(setAnswerValue(eval(inputValue)));
    } catch (error) {
      dispatch(setErrorValue(true));
    }
  }, [inputValue]);

  useEffect(() => {
    if (!sessionStorage.getItem("User_Name")) {
      navigate("/");
    }
  });

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
              console.log(answerValue, "********");
              dispatch(setPrevAnswerValue(answerValue));
              dispatch(setInputValue(""));
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
            onClick={() =>
              dispatch(setInputValue(`${inputValue}${prevAnswerValue}`))
            }
          >
            ANS
          </button>
          <button type="button" className="btn styleError"></button>
          <button
            type="button"
            className="btn divide orange"
            onClick={() => dispatch(setInputValue(`${inputValue}/`))}
          >
            /
          </button>
          <button
            type="button"
            className="btn seven"
            onClick={() => dispatch(setInputValue(`${inputValue}7`))}
          >
            7
          </button>
          <button
            type="button"
            className="btn eight"
            onClick={() => dispatch(setInputValue(`${inputValue}8`))}
          >
            8
          </button>
          <button
            type="button"
            className="btn nine"
            onClick={() => dispatch(setInputValue(`${inputValue}9`))}
          >
            9
          </button>
          <button type="button" className="btn styleError"></button>
          <button
            type="button"
            className="btn multiply orange"
            onClick={() => dispatch(setInputValue(`${inputValue}*`))}
          >
            x
          </button>
          <button
            type="button"
            className="btn four"
            onClick={() => dispatch(setInputValue(`${inputValue}4`))}
          >
            4
          </button>
          <button
            type="button"
            className="btn five"
            onClick={() => dispatch(setInputValue(`${inputValue}5`))}
          >
            5
          </button>
          <button
            type="button"
            className="btn six"
            onClick={() => dispatch(setInputValue(`${inputValue}6`))}
          >
            6
          </button>
          <button type="button" className="btn styleError"></button>
          <button
            type="button"
            className="btn subtract orange"
            onClick={() => dispatch(setInputValue(`${inputValue}-`))}
          >
            -
          </button>
          <button
            type="button"
            className="btn one"
            onClick={() => dispatch(setInputValue(`${inputValue}1`))}
          >
            1
          </button>
          <button
            type="button"
            className="btn two"
            onClick={() => dispatch(setInputValue(`${inputValue}2`))}
          >
            2
          </button>
          <button
            type="button"
            className="btn three"
            onClick={() => dispatch(setInputValue(`${inputValue}3`))}
          >
            3
          </button>
          <button type="button" className="btn styleError"></button>
          <button
            type="button"
            className="btn plus orange"
            onClick={() => dispatch(setInputValue(`${inputValue}+`))}
          >
            +
          </button>
        </div>
        <div className="bottom-container">
          <button
            type="button"
            className="btn zero"
            onClick={() => dispatch(setInputValue(`${inputValue}0`))}
          >
            0
          </button>
          <button
            type="button"
            className="btn decimal"
            onClick={() => dispatch(setInputValue(`${inputValue}.`))}
          >
            .
          </button>
          <button
            type="button"
            className="btn bracket"
            onClick={() => dispatch(setInputValue(`${inputValue}(`))}
          >
            (
          </button>
          <button
            type="button"
            className="btn bracket"
            onClick={() => dispatch(setInputValue(`${inputValue})`))}
          >
            )
          </button>
          <button
            type="button"
            className="btn equals orange"
            onClick={() => {
              dispatch(setInputValue(answerValue));
              dispatch(setPrevAnswerValue(answerValue));
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
