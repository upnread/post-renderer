import React from 'react'
import axios from 'axios'

import PostReader from '@upnread/post-renderer'

const App = () => {
  const [post, setPost] = React.useState({ body: '' })

  React.useEffect(() => {
    async function getPost() {
      const { data } = await axios.get(
        'http://127.0.0.1:8000/api/post/test_post'
      )
      setPost(data)
    }

    getPost()
  }, [])

  return <PostReader post={post.body} />
}

export default App
