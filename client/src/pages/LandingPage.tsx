import React,{useState,useEffect} from 'react'
import httpClient from '../httpClient'
import { User } from '../types'

const LandingPage: React.FC = () => {
  const [user,setUser] = useState<User | null>(null)

  const logoutUser = async () => {
       await httpClient.post("//localhost:5000/logout");
      window.location.href = "/login";
  }

  useEffect(() => {
    (async () => {
      try{
      const resp = await httpClient.get("//localhost:5000/@me");
      setUser(resp.data);
      }catch(error){
       console.log("Not authenticated");
      }
    })();
  },[])
  return (
    <div>
      <h1>Welcome to this React App</h1>
        {user != null ? (
          <div>
          <h3>Logged in</h3>
           <a href="/logout">
         <button onClick={logoutUser}>Logout</button>
            </a>
       </div>
        ):(
          <div>
        <div className='buttons'>
            <a href="/login">
         <button>Login</button>
            </a>
            <a href="/register">
         <button>Register</button>
            </a>
        </div>
        </div>
        )}
    </div>
  )
}

export default LandingPage