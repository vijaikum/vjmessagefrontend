import React, {useState } from "react";
import "./TestResult.css";
import ComponentToDisplay from "./counterDisplayer";

const TestResult: React.FC = () => {
    const [counter,setCounter]=useState<number>(0);
   const [incrementBy,setIncrementBy] = useState<number>(1);

    const handleClick =(action:string) =>{
        setCounter((prevVal) => action === "increment" ? prevVal+incrementBy : prevVal !==0 ? prevVal-incrementBy : 0);
    }
    return(
        <>
            <h1>Counter Application</h1><br/>
            <div className="counterContent">
            <button data-testid="decrementBtn" onClick={()=>handleClick("decrement")}>-</button>
            <ComponentToDisplay counter={counter} incrementBy={incrementBy} setIncrementBy={setIncrementBy}/>
            <button data-testid="incrementBtn" onClick={()=>handleClick("increment")}>+</button>
            </div>
        </>
    )
}

export default TestResult