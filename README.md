# @upnread/post-renderer

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@upnread/post-renderer.svg)](https://www.npmjs.com/package/@upnread/post-renderer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @upnread/post-renderer
```

## Usage

```jsx
import React from 'react'
import axios from 'axios'
import PostRenderer from '@upnread/post-renderer'

async function getPostById() {
  const post_id = 0 // This is the post id to bring the post that you want.
  const token = '' // This is where you would add your private blog token that is provide it into your account.
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

  return <PostRenderer post={post.body} />
}

export default App

```

## License

MIT © [Upnread](https://github.com/Upnread)
