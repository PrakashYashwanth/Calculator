import {
  INPUT_VALUE,
  ANSWER_VALUE,
  ERROR_VALUE,
  PREV_ANSWER_VALUE,
} from "./calculatorTypes";

export const setInputValue = (inputName) => {
  return {
    type: INPUT_VALUE,
    payload: inputName,
  };
};

export const setAnswerValue = (answerName) => {
  return {
    type: ANSWER_VALUE,
    payload: answerName,
  };
};

export const setErrorValue = (errorName) => {
  return {
    type: ERROR_VALUE,
    payload: errorName,
  };
};

export const setPrevAnswerValue = (prevAnswerValue) => {
    console.log(prevAnswerValue, '^^^^^^^^^')
  return {
    type: PREV_ANSWER_VALUE,
    payload: prevAnswerValue,
  };
};
