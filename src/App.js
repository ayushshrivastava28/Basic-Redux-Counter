import React, { Fragment, useEffect } from 'react';

// redux store
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import Counter from './Components/counter';
// const reducer = (state = 0, { type }) => {
//   switch (type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state--;

//     default: return state;
//   }
// }

// const st = createStore(reducer);

// const Main = () => {
//   // fetching redux state
//   const state = useSelector(state => state)
//   // dispatch action
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setInterval(() => {
//       dispatch({ 'type': 'increment' })
//     }, 1000)
//   }, [])

//   useEffect(() => {
//     console.log(state + "")
//   }, [state])

//   return <div>{state}</div>
// }

export default () => {
  return (
    <div>
      <Counter />
    </div>
  )
  // <Provider store={st}>
  //   <Main />
  // </Provider>
}