import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/posts/postsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (e, setInputValue) => setInputValue(e.target.value)

  const handleSavePostClick = () => {
    dispatch(addPost({ id: nanoid(), title, content }))
    setTitle('')
    setContent('')
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => handleInputChange(e, setTitle)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => handleInputChange(e, setContent)}
        />
        <button type="button" onClick={handleSavePostClick}>
          Save Post
        </button>
      </form>
    </section>
  )
}
export default AddPostForm
