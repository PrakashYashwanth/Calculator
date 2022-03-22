import { createStore } from "redux";
import reducer from "./calculator/calculatorReducers";

const store = createStore(reducer);

export default store;
