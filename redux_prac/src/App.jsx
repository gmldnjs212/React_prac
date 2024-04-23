import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

// 사용할 Action Creator를 import한다.
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  return (
    <div className='App'>
      {number}
      <button
        onClick={() => {
          // dispatch를 사용하여 액션객체를 보냄
          // dispatch({ type: "PLUS_ONE" });
          dispatch(plusOne()); // 액션객체를 Action Creator로 변경
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          // dispatch를 사용하여 액션객체를 보냄
          // dispatch({ type: "MINUS_ONE" });
          dispatch(minusOne()); // 액션객체를 Action Creator로 변경
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;
