import { BrowserRouter,
  Route,
  Routes,} from 'react-router-dom';
  
import '../src/styles/App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import QuizPage from './pages/quizPage/QuizPage';
import AboutPage from './pages/aboutPage/AboutPage';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz/*" element={<QuizPage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/result/*" element={<Result userChoice={[]} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
