import './App.css'
import { useEffect, useState } from 'react'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Users from './Users'
import SingleUser from './SingleUser'
import Homepage from './Homepage'
import AllPosts from './posts'
import SinglePost from './singlePost'




function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])


  const location = useLocation()
  const {pathname} = location

  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      setUsers(data)
    }
    fetchUsers()
  },[])

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      setPosts(data)
    }
    fetchPosts()
  },[])
  
  
  return (
    <>
      <div>
 
          <nav>
              <Link to='/'  className={pathname === "/" ? "selectedZero" : ""} >Home </Link>
              <Link to='/users'  className={pathname === "/users" ? "selectedOne" : ""} >Users | {users.length} | </Link>
              <Link to='/posts'  className={pathname === "/posts" ? "selectedTwo" : ""} >Posts | {posts.length} | </Link>
          </nav>

        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/users' element={<Users users={users}/>}/>
          <Route path='/users/:id' element={<SingleUser users={users}/>}/>
          <Route path='/posts' element={<AllPosts posts={posts}/>}/>
          <Route path='/posts/:id' element={<SinglePost posts={posts}/>}/>
        </Routes>
      
      </div>
    </>
  )
}

export default App
