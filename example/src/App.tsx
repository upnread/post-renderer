import React from 'react'
import PostRenderer, { getPost } from '@upnread/post-renderer'

async function fetchSinglePost() {
  const response = await getPost({
    slug: 'introducing-upnread',
    token: 'R1W0bW8R8DHVQ9G9E9NSU88UAAvSxi'
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
