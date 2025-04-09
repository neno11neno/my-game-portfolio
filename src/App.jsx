import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Intro from './pages/Intro';
import Survey from './pages/Survey';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
