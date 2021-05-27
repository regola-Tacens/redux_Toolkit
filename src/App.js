import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, selectCount } from './redux/counter';

function App() {
  // const[counter, setCOunter]=useState(0)
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  //  const increment =()=>{
  //    setCOunter(counter => counter +1)
  //  }
  //  const decrement =()=>{
  //   setCOunter(counter => counter -1)
  // }

  return (
    <div>
      <h1>COUNTER  :  {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>increment by 10</button>
      
    </div>
  );
}

export default App;
