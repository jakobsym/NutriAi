import { useEffect, useState } from "react";
import  generatePrompt from "../api/generate.js";
import Logo from "./Logo.js";
import "../styles/Quiz.css";
import { Link } from 'react-router-dom';


/* Integrate API within this function (index.js)*/
const Result = (props: {userChoice: string[]}) => {
    const [result, setResult] = useState<String[]>(); // result from API Response
    const [dispModalResult, setDispModalResult] = useState<boolean>(false);   // Modal for displaying created result

    const userInput :string = "Im a " + props.userChoice[0] + " that weighs about " + props.userChoice[1] + ". I want to " + 
        props.userChoice[2] + " doing " + props.userChoice[3] + ". Return a response using only 5 methods to achieve my goal, maybe listing specfic exercies. I want the response to have space between each bullet point.";
        /* bullet points listed 1 through 5 creating blank space between each bullet point to help me acheive my goal:" ; */

    const handleClick = () => {
        setDispModalResult(true);
        //console.log("Clicked: buttonClick = " + buttonClick);
    }
    // Allows for setDispResult(true) to apply synchro
    useEffect(() => {
        if (dispModalResult) {
            displayResult();
        }
    }, [dispModalResult]);

    async function displayResult() {
        setResult(await generatePrompt(userInput));
    }
 
    return (
        <>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/"> <Logo /> </Link>
        </div>
        <div id="result-container"></div>
        
        {/* Modal display button */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row-reverse items-end">
            <button className="result-button"  onClick={handleClick}>
                Display results
            </button>
        </div>

        {/* Modal display conditional */}
        {dispModalResult ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/* Content */}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        {/* Header */}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                NutriAi: Personal Trainer
                            </h3>
                            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setDispModalResult(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    x 
                                </span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="relative p-6 flex-auto">
                            <ul className="my-4 text-slate-500 text-lg leading-relaxed">
                                {result && result.map((point, index) => (
                                    <p key={index} className="mb-2">
                                        {console.log(point.trim())!}
                                        {"\n" + point.trim()}
                                    </p>
                                ))}
                            </ul>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setDispModalResult(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null }
        </>
    );
}

export default Result