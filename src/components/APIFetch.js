import {useState, useEffect, useReducer } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { css } from '@emotion/core'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ApiFetch = (props) => {
  // add loading component
  const [loading, setLoading] = useState(true)
  const [userObject, setUserObject] = useState({})
  const [time, setTime] = useState(0)

  useEffect(()=> {
    // make our loading component show for at least 1.5 seconds
    const timeout = setTimeout(()=> {
      setTime(1)
    }, 2500)
    // cleanup function
    return ()=> { clearTimeout(timeout) }
  }, [])
    
  useEffect(()=> {
      //do our logic here
      const getUser = async()=> {
        let result = await fetch('https://api.github.com/users/' + props.userName )
        result = await result.json()
        setUserObject( result )
        // set loading to false  when data is loaded
        setLoading(false)
      }
      getUser()

  }, [props.userName])

  return (
      <div>
          <h2>API PART</h2>
        { !loading && time === 1 ?
          <>
          <p>{userObject.name}</p>
          <img src={userObject.avatar_url} alt={userObject.name} />
          </>
         :
        <div>
          <ClimbingBoxLoader css={override}/>
        </div>
        }
      </div>
  )
}

export default ApiFetch