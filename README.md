![logo](https://user-images.githubusercontent.com/19271573/110070733-fe2ab700-7d50-11eb-84e4-f0a6ea17cf35.png)

# @upnread/post-renderer
## You can use this library in any of your React projects.

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

---

## Params
| Param | required | value |
| ------------- | ------------- | ------------- |
| post  | yes  | You need to the send **post.body** prop |
| primary_color  | No | You can send **post.blog.primary_color** prop or just send any primary color HEX code |


## You can request your post by id or by slug

### Example of usage

```jsx
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


```

## Visit our web site
[https://upnread.com](https://upnread.com)
