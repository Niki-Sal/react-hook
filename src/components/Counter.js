import {useState, useEffect} from 'react';

const Counter = (props) =>{
    const[count, setCount] = useState(props.initialNumber)

    function subtract(){
        setCount (count-1)
    }

    //this will run on first mount ComponentDidMount
    //this will run on every update ComponentDidUpdate
    useEffect(()=>{
        console.log('hello')
    })

    //if you pass an empty array it acts like ComponentDidMount
    //just runs once
    useEffect(()=>{
        console.log('only on the Mount')
    },[])

    //runs on initial load, and whenever count gets updated???
    // useEffect(()=>{
    //     console.log('when count update')
    // a logic to check count and when to run
    // },[count])


    return(
        <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={()=> setCount(count + 1 )}>Add</button>
        <button onClick={subtract}>Subtract</button>
        </>
    )
}  

export default Counter;