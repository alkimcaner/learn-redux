import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { decrement, increment } from "./slices/counterSlice";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import ChangeName from "./components/ChangeName";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux</h1>
      <Component1 />
      <Component2 />
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <ChangeName />
      </div>
    </div>
  );
}

export default App;
