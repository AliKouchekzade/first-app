import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const addHandker = () => {
    setItem([...item,Math.ceil(Math.random() * 10)]);
  };

  return (
    <div>
      <p>item = {item.toString()}</p>
      {item.map(element => {
        return <li>{element}</li>
      })}
      <button onClick={addHandker}>add item</button>
    </div>
  );
};

export default HookArray;
