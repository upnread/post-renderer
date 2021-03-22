![logo](https://user-images.githubusercontent.com/19271573/110070733-fe2ab700-7d50-11eb-84e4-f0a6ea17cf35.png)

# @upnread/post-renderer
[Upnread](https://upnread.com) is a CMS that help companies and users to build custom blogs! You can install **@upnread/post-renderer** library to render your amazing posts that you have created on your account.

[![NPM](https://img.shields.io/npm/v/@upnread/post-renderer.svg)](https://www.npmjs.com/package/@upnread/post-renderer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Note
Before installing this library make sure that you have created an account in [Upnread](https://upnread.com)

## Install

```bash
npm install --save @upnread/post-renderer
```

## Read our documentation!
Enter to our [documentation](https://upnread.com/docs), we have a list of end points you can use to get your posts and build your custom blog.

# You can request your post by id or by slug

## Usage to render your post by id

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

## Usage to render your post by slug

```jsx
import React from 'react'
import axios from 'axios'
import PostRenderer from '@upnread/post-renderer'

async function getPostBySlug() {
  const slug = 'my-first-post' // This is the post slug to bring the post that you want by slug.
  const token = '' // This is where you would add your private blog token that is provide it into your account.
  const endpoint = 'https://api.upnread.com/api/post/get_post'

  const response = await axios.get(endpoint, { params: { token, slug } })
  return response
}

const App = () => {
  const [post, setPost] = React.useState({ body: '' })

  React.useEffect(() => {
    async function getPost() {
      const { data } = await getPostBySlug()
      setPost(data)
    }

    getPost()
  }, [])

  return <PostRenderer post={post.body} />
}

export default App

```

## Visit our web site
[https://upnread.com](https://upnread.com)
