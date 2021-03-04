import { useState, useEffect } from 'react';

const Counter = (props) => {
    // we want a new piece of state
    const [count, setCount] = useState(props.initialNumber)
    const [name, setName] = useState('Niki')
    // useState always returns an array, the first value is the state
    // the second value is the updaterfunction.

    const updateByFive = ()=> {
        setCount(count + 5)
    }

    function subtract() {
        setCount(count -1 )
    }

    // this will run on first mount ComponentDidMount
    // this will run on every update ComponentDidUpdate
    useEffect(() => {
       console.log('hello')
    });

    // if you pass an empty array it acts like ComponentDidMount
    // just runs once
    useEffect(() => {
        console.log('only on the Mount')
    }, []); 

    // runs on initial load, and whenever count gets updated
    useEffect(() => {
    console.log('When count updates')
    // DONT DO THIS INFINITE LOOP
    // setCount(count+ 1)
    }, [count]); 

    return(
        <>
            <h1>{name} Counter</h1>
            <p>{count}</p>
            <button onClick={updateByFive}>Add</button>
            <button onClick={subtract}>Subtract</button>
        </>
    )
}

export default Counter