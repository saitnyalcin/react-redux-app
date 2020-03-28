import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/action';

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
      <button className="btn btn-warning ml-3"> LOGIN </button>

      {isLogged ? (
        <h3>Information that I should not see if I am not logged in</h3>
      ) : (
        <h3>You are not logged in yet.</h3>
      )}
    </div>
  );
}

export default App;
