import React, { useEffect } from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const reducer = (state = 10, { type }) => {
    switch (type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state;
    }
}
const Counter = () => {
    const count = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => { dispatch({ 'type': 'increment' }) }}>+</button>
            <span>{count}</span>
            <button onClick={() => { dispatch({ 'type': 'decrement' }) }}>-</button>
        </>
    )
}

const store = createStore(reducer)

export default () => {
    return (
        <Provider store={store} >
            <Counter />
        </Provider>
    )
}