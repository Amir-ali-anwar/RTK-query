import { useState } from 'react'


function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: Date.now()});

  return (
    <>
        <h1> Leave A Like : </h1>
        <div>
          <input type="text"  placeholder="Title..." />
          <input type="text"  placeholder="Body..."/>
          <button>Create post</button>
          <div>

          </div>
        </div>
    </>
  )
}

export default App
