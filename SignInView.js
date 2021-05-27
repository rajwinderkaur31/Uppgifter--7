import  { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import  { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import E_COMMERCE_APIService from '../../shared/api/service/E_COMMERCE_APIService'



export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] =useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState({ username: '', password: '' })

    const signIn = ( ) => {
        setAuthenticatedUser(username)
        localStorage.setItem('username', username)
        history.push(RoutingPath.homeView)
    }

   const register =  async () =>  {
        try {
            const { data } = await E_COMMERCE_APIService.createUser(newUser)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

   }
    return (
        <div>
        <div>
        <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br></br>
        <button onClick={() => signIn()}>sign In</button>
        <hr />
        <h1>REGISTER NEW USER</h1>
        <input placeholder='username' onChange={event => setNewUser({...newUser, username:event.target.value})} /> 
       <input  placeholder='password' type='password' onChange={event => setNewUser({ ...newUser,password: event.target.value})} />
       <button onClick={() => register()}>Register</button>
    </div>

        </div>

    )  

 
}  
 
    


