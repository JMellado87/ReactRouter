import { Link } from 'react-router-dom'
import './App.css'




    const Users = ({users}) => {
        return( 
        
            <div className='singleUserList'> 
            <h1>Users - of the force</h1>
            <p>List of Users</p>
            <ul>{
            users.map((user) => {
            return  (
                <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
                )
            })
            }
            </ul>
            </div>
        )
    }


export default Users
