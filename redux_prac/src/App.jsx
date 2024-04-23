import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  // 액션객체를 보내는 역할을 수행하는 dispatch객체 생성
  const dispatch = useDispatch();

  // 코드 추가
  const number = useSelector((state) => state.counter.number);

  return (
    <div className='App'>
      {number}
      <button
        onClick={() => {
          // dispatch를 사용하여 액션객체를 보냄
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          // dispatch를 사용하여 액션객체를 보냄
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;
