import React, {useState} from 'react'

const Quiz: React.FC = () => {

    /* Create Question/QuizBank types to be utilized */
    type Question = {
        question: string,
        choices: string[],
    }

    interface QuizBank {
        totalQuestion: number,
        questions: Question[],
    }

    const quiz: QuizBank = {
        totalQuestion: 4,
        questions: [
            {
                question: "Question 1",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            },
            {
                question: "Question 2",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            },
            {
                question: "Question 3",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            },
        ]
    }

    const [quizState, setQuizState] = useState({
        currentQuestionIndex: 0,    // track current question user is @
        userChoices: [] as string[],    // store user choices as array of strings
      });

      /* Called when user clicks choice. Updates state by adding selected choice to userChoices[] */
      const handleChoiceSelection = (choice: string) => {
        setQuizState((prevState) => ({
          ...prevState,
          userChoices: [...prevState.userChoices, choice],
        }));
      };

      const { currentQuestionIndex, userChoices } = quizState;
      const currentQuestion = quiz.questions[currentQuestionIndex];

      /* Dynamically renders current question and choice(s) based on questionIndex */
      const renderQuestion = () => {
        if (currentQuestionIndex >= quiz.totalQuestion) {
          // Quiz finished, navigate to result page or perform other actions
          console.log('User choices:', userChoices);
          return <div>Quiz finished!</div>;
        }

        return (
            <div>
              <h2>{currentQuestion.question}</h2>
              <ul>
                {currentQuestion.choices.map((choice, index) => (
                  <li key={index}>
                    <button onClick={() => handleChoiceSelection(choice)}>
                      {choice}
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          );
        };
        /* Updates question, upon user clicking next */
        const handleNextQuestion = () => {
            setQuizState((prevState) => ({
              currentQuestionIndex: prevState.currentQuestionIndex + 1,
              userChoices: prevState.userChoices,
            }));
        };
    return <div>{renderQuestion()}</div>;
}

export default Quiz