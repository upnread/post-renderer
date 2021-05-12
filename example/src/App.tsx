import React from 'react'
import PostRenderer, { getPost } from '@upnread/post-renderer'

async function fetchSinglePost() {
  const response = await getPost({
    slug: 'Your post slug',
    token: 'Your secret token'
  })

  return response
}

const App = () => {
  const [post, setPost] = React.useState({
    body: '',
    blog: { primary_color: '' }
  })

  React.useEffect(() => {
    async function fetchPost() {
      const { data } = await fetchSinglePost()
      setPost(data)
    }

    fetchPost()
  }, [])

  return (
    <PostRenderer primaryColor={post.blog.primary_color} post={post.body} />
  )
}

export default App
