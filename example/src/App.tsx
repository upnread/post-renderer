import React from 'react'
import axios from 'axios'
import PostRenderer from '@upnread/post-renderer'

async function getPostById() {
  const post_id = 844 // This is the post id to bring the post that you want.
  const token = 'R1W0bW8R8DHVQ9G9E9NSU88UAAvSxi' // This is where you would add your private blog token that is provide it into your account.
  const endpoint = 'https://api.upnread.com/api/post/get_post'

  const response = await axios.get(endpoint, { params: { token, post_id } })
  return response
}

const App = () => {
  const [post, setPost] = React.useState({ body: '' })

  React.useEffect(() => {
    async function getPost() {
      const { data } = await getPostById()
      setPost(data)
    }

    getPost()
  }, [])

  return <PostRenderer primaryColor='#663399' post={post.body} />
}

export default App
