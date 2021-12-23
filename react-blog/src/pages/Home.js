import React, {useState, useEffect} from 'react'
import { auth, db } from '../firebase-config'
import {getDocs, collection, doc, deleteDoc} from  'firebase/firestore'
import { useNavigate } from 'react-router'

const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([])
  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
    .then(window.location.reload())
    
  }
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostLists(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getPosts();
  }, [])
  return (
    <div className="homePage">
      {postLists.map((post, key)=> {
        return <div key={key} className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            { isAuth && post.author.id === auth.currentUser.uid &&
            (<div className="deletePost">
              <button onClick={() => deletePost(post.id)}>🧨</button>
            </div>)}
          </div>
          <div className="postTextContainer">
            {post.postText}
          </div>
          <h3>@{post.author.name}</h3>
        </div>
      })}
    </div>
  )
}

export default Home
