import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Todo from './components/todo';

function App() {
  return (
    <>
      <Link to='/'></Link>
      <Routes>
        <Route path='/' element={<Todo/>}></Route>
      </Routes>
    </>
  );
}

export default App;
