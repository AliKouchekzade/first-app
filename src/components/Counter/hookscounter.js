import { useState } from "react";

const HooksCounter = () => {

    const [num,setNum] = useState(0);

    const clickHandler = () => {
        //setNum(num + 1);
        setNum( preNum => preNum + 1 ); //if update state depends on previous state use callback
    };

    return (
    <div>
      <p>conunt is : {num}</p>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
};

export default HooksCounter;
