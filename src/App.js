import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Calculator from "./Components/Calculator/Calculator";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
