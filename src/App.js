import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions/action';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())} className="btn btn-success">
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="btn btn-danger ml-3"
      >
        -
      </button>
      <button
        onClick={() => dispatch(login())}
        className="btn btn-warning ml-3"
      >
        {isLogged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
