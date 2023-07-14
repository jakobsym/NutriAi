import { BrowserRouter,
  Route,
  Routes,} from 'react-router-dom';
  
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import QuizPage from './pages/quiz_page/QuizPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz/*" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );

  {/* 
  return (
    <>
      <LandingPage />
    </>
  )
  */}
}

export default App
