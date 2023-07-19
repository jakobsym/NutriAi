import '../Quiz.css'
import { useEffect, useState } from "react";

/* Integrate API within this function (index.js)*/
const Result = (props: {userChoice: string[]}) => {
    const [result, setResult] = useState();
    const [dispResult, setDispResult] = useState(false);

    const handleClick = () => {
        setDispResult(true);
        //console.log("Clicked: buttonClick = " + buttonClick);
    }
    // Allows for setDispResult(true) to apply synchro
    useEffect(() => {
        if (dispResult) {
            displayResult();
        }
    }, [dispResult]);

    const userInput:string = "Im a " + props.userChoice[0] + " that weighs about " + props.userChoice[1] + ". I want to " + 
        props.userChoice[2] + " doing " + props.userChoice[3] + ". Explain very breifly how I can acheive my goal."
    

    async function displayResult(): Promise<any>{
        //setDispResult(true); //boolean val not changed with useState() as its asyncho need useEffect()
        //event.preventDefault();
        console.log("dispResult = "+ dispResult)
        try {
            const response = await fetch("../api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: userInput})
            });

            const data = await response.json();
            if (response.status !== 200){
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            setResult(data.result);
        } catch(error : any){
            console.error(error);
            alert(error.message)
        }
    }

    return (
        <>
        <div className="result">
            <h1>Personal Trainer:</h1>
            <button onClick={handleClick}> Display results.</button>
        </div>
    
        <div>
            <p>{result}</p> {/* This is response from API */}
        </div>
        </> 
    )
}

export default Result