import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./redux/modules/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(counterActions.add(10));
    console.log(counter);
  };

  const subHandler = () => {
    dispatch(counterActions.sub(10));
    console.log(counter);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <div>
        <button
          onClick={() => {
            addHandler();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            subHandler();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
