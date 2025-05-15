import React, { useContext } from "react";
import { AkshayContext } from "../ContextApi";

const Card = () => {
  let { data } = useContext(AkshayContext);

  console.log(data);
  return (
    <div className="h-80 w-80 border-2 rounded-xl p-5">
      <h1>{data}</h1>
    </div>
  );
};

export default Card;
