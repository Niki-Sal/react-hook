import {useState, useEffect} from 'react'

const APIFetch = (props) =>{
    const [userObject, setUserObject] = useState({})

   
    useEffect(()=>{
        //do our logic here
        const getUser = async() =>{
            let result = await fetch('https://api.github.com/users/'+ props.userName)
            result = await result.json()
            setUserObject( result )
        }
        getUser()
    },[])


    return(
        <div>
            <h2>API PART</h2>
            <p> {userObject.name}</p>
            <img src={userObject.avatar_url} alt={userObject.name} />
        </div>
    )
}

export default APIFetch;