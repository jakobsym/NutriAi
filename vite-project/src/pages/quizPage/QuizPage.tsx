import { Route, Routes } from "react-router-dom";
import Quiz from "../../components/Quiz";

const QuizPage = () => {
  return (
    <Routes>
      <Route index element = {<Quiz />} />
    </Routes>
  );
}

export default QuizPage