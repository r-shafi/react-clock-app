import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Alarm from './pages/Alarm';
import Clock from './pages/Clock';
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Clock />}></Route>
            <Route path="alarm" element={<Alarm />}></Route>
            <Route path="timer" element={<Timer />}></Route>
            <Route path="stopwatch" element={<Stopwatch />}></Route>
          </Routes>
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
