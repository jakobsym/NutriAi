const Quiz: React.FC = () => {

    /* Create Question/QuizBank types to be utilized */
    type Question = {
        question: string,
        choices: string[],
        response: string,
    }

    interface QuizBank {
        totalQuestion: number,
        questions: Question[],
    }



    

  return (
    <div>Quiz</div>
  )
}

export default Quiz