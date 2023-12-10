import { Link } from 'react-router-dom'



const AllPosts = ({posts}) => {
    return(
    <div className="container">
        <h1>Posts - Jedi Archives</h1>
        <ul>
            {
            posts.map((post) => {
            return(
                <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
            )
            })
            }
        </ul>
    </div>
    )
}


export default AllPosts