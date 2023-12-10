import { useParams, Link } from "react-router-dom";

const SingleUser = ({users}) => {
    const params = useParams()
    const id = params.id*1


    const singUser = users.find((user) => {
        return user.id === id
    })

            if (!singUser) {
                return null
            }
            return ( <div className="containerSgl">
                        <h1>{singUser.name}</h1>
                        <p>Email: {singUser.email}</p>
                        <p>Phone: {singUser.phone}</p>
                        <p>Website: {singUser.website}</p>
                        <p>Address:</p>
                        <ul>
                            <li>{singUser.address.street}</li>
                            <li>{singUser.address.suite}</li>
                            <li>{singUser.address.city}</li>
                        </ul>
                        <Link to="/users">Back to all users</Link>
                    </div> 
                ) 

}

export default SingleUser