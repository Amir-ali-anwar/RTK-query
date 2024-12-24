import { useState } from 'react'
import { useCreatePostMutation, useGetPostsQuery } from './services/jsonPlaceholderApi';


function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: Date.now() });
  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating, error: createError }] =
    useCreatePostMutation();
  if (isLoading) return <p> Loading...</p>;

  if (createError) return <p> There was an error creating a post</p>;

  if (error) return <p> There was an error :</p>;
  const handleCreatePost = async () => {
    console.log(newPost);
    
    await createPost(newPost);
    refetch()
  }
  return (
    <>
      <h1> Leave A Like : </h1>
      <div>
        <input type="text" placeholder="Title..." value={newPost.title} onChange={(e) => setNewPost(
          (prev) => ({ ...prev, title: e.target.value })
        )} />
        <input type="text" placeholder="Body..." value={newPost.body} onChange={(e) => setNewPost(
          (prev) => ({ ...prev, body: e.target.value })
        )} />
        <button onClick={handleCreatePost} disabled={isCreating} >Create post</button>
        <div>
          {data?.map((post) => (
            <p key={post.id}> {post.title}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
