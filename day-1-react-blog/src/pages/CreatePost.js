import React, {useState, useEffect} from 'react'
import {db, auth} from '../firebase-config'
import {addDoc, collection} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")
  const postCollectionReff = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async() => {
    await addDoc(postCollectionReff, 
      {
        title, 
        postText, 
        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }
      });
      navigate("/")
  };
  useEffect(() => {
    if(!isAuth){
      navigate("/login")
    }
  }, [])

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create Post</h1>

        <div className="inputGp">
          <label>Title:</label>
          <input 
          type="text" 
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value)
          }}
           />
        </div>

        <div className="inputGp">
          <label>Post:</label>
          <textarea 
          placeholder="Post...."
          onChange={(event) => {
            setPostText(event.target.value)
          }}
          />
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
