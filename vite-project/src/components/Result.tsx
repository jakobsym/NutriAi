import '../Quiz.css'

/* Integrate API within this function (index.js)*/
const Result = (props: {userChoice: string[]}) => {
  return (
    <div className="result">
            <h3>Example Prompt:</h3>
            <div>
                <p>
                    {"I want to " + props.userChoice[0] + " doing " + props.userChoice[2] + ". I weigh " + props.userChoice[1]
                    + ". What should my daily caloric intake be?" }
                </p>
            </div>
            
    </div>
  )
}

export default Result