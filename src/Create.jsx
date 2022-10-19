import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

 const Create = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('nijat')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit =(e)=> {
    e.preventDefault()

    const blog = {title, body, author}

    setIsPending(true)

    // console.log(blog)
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(blog)
    })
    .then(()=> { 
      console.log('new blog added')
      setIsPending(false)
      // history.go(-1)
      history.push('/')
  })
    // .then(res=> console.log(res))
  }
  console.log(body)
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor=""> Blog Title</label>
      <input 
      type="text" 
      value={title}
      required 
      onChange={(e)=> setTitle(e.target.value)}/>
      <label htmlFor=""> Blog body:</label>
      <textarea required value={body} onChange={(e)=> setBody(e.target.value)} ></textarea>
      <label htmlFor=""> Blog author:</label>
      <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
        <option value="mario">mario</option>
        <option value="nijat">nijat</option>
      </select>
      { !isPending && <button>Add Blog</button> }
      { isPending && <button>Adding Blog...</button> }
      </form>
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
    </div>
  )
}

export default Create