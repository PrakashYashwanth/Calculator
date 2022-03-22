import {
  INPUT_VALUE,
  ANSWER_VALUE,
  ERROR_VALUE,
  PREV_ANSWER_VALUE,
} from "./calculatorTypes";

const initialState = {
  inputValue: "",
  answerValue: 0,
  errorExists: false,
  prevAnswerValue: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case ANSWER_VALUE:
      return {
        ...state,
        answerValue: action.payload,
      };
    case ERROR_VALUE:
      return {
        ...state,
        errorExists: action.payload,
      };
    case PREV_ANSWER_VALUE:
      return {
        ...state,
        prevAnswerValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
