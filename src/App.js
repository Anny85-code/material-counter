import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import CounterPage from './counterPage/CounterPage';
import HomePage from './homePage/HomePage'


const App = ()=> {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/counterpage" element={<CounterPage />} />
      </Routes>
    </div>
    
  );
}

export default App;
