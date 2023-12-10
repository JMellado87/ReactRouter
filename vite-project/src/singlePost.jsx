import { useParams, Link } from "react-router-dom";

const SinglePost = ({posts}) => {
    const params = useParams()
    const id = params.id*1


    const singPost = posts.find((user) => {
        return user.id === id
    })

            if (!singPost) {
                return null
            }

                return (
                    <div className="containerPost">
                        <h1>{singPost.title}</h1>
                        <p>{singPost.body}</p>
                        <Link to="/posts">Back to Jedi Archives</Link>
                    </div>
                )


}

export default SinglePost