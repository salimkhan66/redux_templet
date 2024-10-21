import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment,decrement } from '../Reducers/ReducerSlice'
function HomePage() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className=''>
       <button onClick={() => dispatch(increment())}>increase</button>
       <h1>{count}</h1> 
       <button onClick={() => dispatch(decrement())}>decrease</button>
    </div>
  )
}
export default HomePage