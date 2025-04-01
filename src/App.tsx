// import Message from "./Message";
import DisplayItems from "./listitems";
import s01 from "./images/S01.jpeg";
import { useState } from "react";
import Counter from "./buttoncounter";
import ChildCompopent from "./ChildStatus";
import CounterUsingReducerDemo01 from "./useReducerExample01";
import MyInput from "./Example01SetTextField";
import ChangeColor1 from "./ChangeTextColor";
import TestComponent from "./textComponent";
import DisplaySelectedImage from "./DisplaySelectedImage";
function Header({ name, year }) {
  //  console.log(props);
  return (
    <div>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </div>

  );
}
const items = [
  "Macroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with vegetables"
];
const disObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));
// console.log(disObjects);
function App() {
  const [status, setStatus] = useState("Open");
  const [statusBool, setStatusBool] = useState(true);
  console.log(status);
  function handleStatusButtonClick() {
    setStatusBool(setStatusBool => !setStatusBool);
  }
  return (
    <div>
      {/* <Message/> */}
      <h2>The restaurant is currently {status}</h2>
      <h2>The restaurant is {statusBool ? "Open" : "Closed"}</h2>
      <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
      <button onClick={() => setStatus("Open")} >Open Restaurant</button>
      <button onClick={handleStatusButtonClick}>{statusBool ? "Close" : "Open"} this restaurant</button>
      <img src={s01} height={200} alt="Steve Jobs Photo" />
      <Header name="Manan" year={2002} />
      <DisplayItems dishes={disObjects} />
      <div>
        <p>Counter Component </p>
        <Counter />
      </div>
      <div>
        <ChildCompopent openStatus={statusBool} onStatus={setStatusBool} />
      </div>
      <p>
        Example of counter using useReducer demo - 01
      </p>
      <div>
        <CounterUsingReducerDemo01 />
      </div>
      <div>
        <MyInput></MyInput>
      </div>
      <div>
        <p>Change Color - 01</p>
        <ChangeColor1></ChangeColor1>
      </div>
      <div>
        <TestComponent></TestComponent>
      </div>
      <div>
      <DisplaySelectedImage></DisplaySelectedImage>
      </div>
    </div>

  );
}
export default App;