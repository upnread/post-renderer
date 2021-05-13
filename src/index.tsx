/* eslint-disable camelcase */
import * as React from 'react'
import { EditorState, convertFromRaw } from 'draft-js'
import Editor from '@draft-js-plugins/editor'

import {
  get_post,
  get_all_posts,
  get_featured_posts,
  get_related_posts,
  get_posts_by_category,
  get_posts_by_tags,
  get_posts_by_author,
  get_all_categories,
  get_all_tags,
  get_all_authors,
  TPostQRelated,
  TPostQ,
  IPostGlobal,
  TPostByCategory,
  TPostByTags,
  TPostByAuthor,
  TToken
} from './api/blog'

import stylesMap, { Container } from './styles/styles'

import plugins from './utils/plugins'
import grabbingAllPluginDecorators from './utils/decorators'

interface TProps {
  post: string
  style?: React.CSSProperties
  primaryColor?: string
}

export async function getAllPosts(params: IPostGlobal) {
  const response = await get_all_posts(params)
  return response
}

export async function getPost(params: TPostQ) {
  const response = await get_post(params)
  return response
}

export async function getFeaturedPosts(params: IPostGlobal) {
  const response = await get_featured_posts(params)
  return response
}

export async function getRelatedPosts(params: TPostQRelated) {
  const response = await get_related_posts(params)
  return response
}

export async function getPostsByCategory(params: TPostByCategory) {
  const response = await get_posts_by_category(params)
  return response
}

export async function getPostsByTags(params: TPostByTags) {
  const response = await get_posts_by_tags(params)
  return response
}

export async function getPostsByAuthor(params: TPostByAuthor) {
  const response = await get_posts_by_author(params)
  return response
}

export async function getAllCategories(params: TToken) {
  const response = await get_all_categories(params)
  return response
}

export async function getAllTags(params: TToken) {
  const response = await get_all_tags(params)
  return response
}

export async function getAllAuthors(params: TToken) {
  const response = await get_all_authors(params)
  return response
}

function PostReader({ post, primaryColor = '#3342b4', ...props }: TProps) {
  const [postBody, setPostBody] = React.useState(EditorState.createEmpty())

  React.useEffect(() => {
    try {
      const postValue = JSON.parse(post)
      const editorValue = convertFromRaw(postValue)
      const decorator = grabbingAllPluginDecorators()
      setPostBody(EditorState.createWithContent(editorValue, decorator))
    } catch {}
  }, [post])

  function myBlockStyleFn(contentBlock: any) {
    const type = contentBlock.getType()
    return type
  }

  return (
    <Container {...props}>
      <Editor
        blockStyleFn={myBlockStyleFn}
        editorState={postBody}
        customStyleMap={stylesMap(primaryColor)}
        plugins={plugins}
        readOnly
      />
    </Container>
  )
}

export default PostReader
