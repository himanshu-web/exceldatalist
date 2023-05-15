import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Data from './components/data';

function App() {
  return (
    <>
      <Link to='/'></Link>
      <Routes>
        <Route path='/' element={<Data/>}></Route>
      </Routes>
    </>
  );
}

export default App;
