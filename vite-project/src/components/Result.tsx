import '../Quiz.css'
import { useEffect, useState } from "react";
import  generatePrompt from "../api/generate.js";

/* Integrate API within this function (index.js)*/
const Result = (props: {userChoice: string[]}) => {
    const [result, setResult] = useState<String[]>();
    const [dispResult, setDispResult] = useState<boolean>(false);

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

    const userInput :string = "Im a " + props.userChoice[0] + " that weighs about " + props.userChoice[1] + ". I want to " + 
        props.userChoice[2] + " doing " + props.userChoice[3] + ". Return a response using only 5 bullet points that will help me acheive my goal:" ;
    

    async function displayResult() {
        setResult(await generatePrompt(userInput));
    }

    return (
        <>
        <div className="result">
            <h1>Personal Trainer:</h1>
            <button onClick={handleClick}> Display results.</button>
        </div>
        <div>
            <ul>
                {result && result.map((point, index) => (
                    <li key={index}>
                        {console.log(point.trim())!}
                        {point.trim()}
                    </li>
                ))}  {/* This is response from API */}
            </ul>
        </div>
        </> 
    )
}

export default Result