import React, { useContext } from "react";
import Card from "./component/Card";
import { AkshayContext } from "./ContextApi";

const App = () => {
  let { data, setdata } = useContext(AkshayContext);

  console.log(data);

  function handleDc() {
    setdata(data - 1);
  }
  function handleIn() {
    setdata(data + 1);
  }

  return (
    <>
      <h1>{data}</h1>
      <Card name="Card 1" />
      <h1>{data}</h1>

      <button onClick={handleDc} className="mt-5">
        -
      </button>
      <button onClick={handleIn} className="mt-5 ml-4">
        +
      </button>
    </>
  );
};

export default App;
