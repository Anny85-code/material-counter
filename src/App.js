import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import CounterPage from './counterPage/CounterPage';
import HomePage from './homePage/HomePage';
import List from './list/List';
import Footer from './footer/Footer';
import Total from "./total/Total";
import Calculator from './calculator/Calculator';


const App = ()=> {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/counterpage" element={<CounterPage />} />
        <Route path="/list" element={<List />} />
          <Route path="/total" element={<Total />} />
          <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
