import { count } from "console";
import { useEffect, useState } from "react";

function Counter() {

    // Changing the value of a variable directly will not cause React to re-render the website
    //States are Immutable!! Changing directly does not do anything
    // let currentCount = 10;

    /*
        useState(parameter) the parameter will set the default value of the state
        - It gives you the state and a function to change the value of the state (because of its weird immutable property)
    */
    const [currentCount, setCount] = useState(1);
    const [show, setShow] = useState(false);
    

    function increment() {
        // currentCount +=1; States are immutable! You must use the provided function given by useState()
        setCount(currentCount + 1)
        console.log(currentCount);
    }

    function flip() {
        console.log("Showing the counter");
        setShow(!show);
    }
    
    useEffect(()=>{
        console.log("changed inuseeffect");
    }, [currentCount]); //give list of variables that useeffect will only change on these variables + lifecycle 
    
    //Conditional Rendering - show a component/JSX based on a condition (basically use if statement like how you've doing it)
    // if(show) {
    //     return <div>
    //         <button onClick={flip}>Click me to hide</button>
    //         <p>{currentCount}</p>
    //         <button onClick={increment}>Click me</button>
    //     </div>
    // }else {
    //     return <div>
    //         <button onClick={flip}>Click me to show</button>
    //     </div>
    // }

    return <div>
        <button onClick={flip}>Click me to {show ? "hide":"show"}</button>

        {/* Inline conditional rendering w/ && Operator to render certain things */}
        {
            show && <div>
                <p>{currentCount}</p>
                <button onClick={increment}>Click me</button>
            </div>
        }
    </div>
}

export default Counter;