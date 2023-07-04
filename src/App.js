import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { Increment,Decrement } from './Store/actions';

function App() {
  const myState =  useSelector((state) => state.CouterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className='header-text'>Hello from React</h1>
      <div>
        <button onClick={() => dispatch(Increment())}> Decrement</button>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
     <div className='button-container'>
     <Link className='button' to="/About"> About </Link>
      <Link className='button' to="/Contact"> Contact </Link>
      <Link className='button' to="/"> Home </Link>
     </div>
    </div>
  );
}

export default App;
