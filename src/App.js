import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/action';

function App() {
  const counter = useSelector(state => state.counter.totalCount);
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
    </div>
  );
}

export default App;
