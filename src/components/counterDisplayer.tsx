interface ComponentToDisplayProps {
  counter: number;
  incrementBy:number;
  setIncrementBy: (value: number) => void;
}

const ComponentToDisplay:React.FC<ComponentToDisplayProps> = ({counter,incrementBy,setIncrementBy}) =>{
    
    return(
        <>
        <label>Enter a Value to Increment By:</label>
        <input type="text" value={incrementBy} onChange={(e)=>setIncrementBy( Number(e.target.value))}/>
        <p data-testid="counter">{counter}</p>
        </>
    )
}

export default ComponentToDisplay;