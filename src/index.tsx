import * as React from 'react'
import { EditorState, convertFromRaw } from 'draft-js'
import Editor from '@draft-js-plugins/editor'

import stylesMap, { Container } from './styles/styles'

import plugins from './utils/plugins'
import grabbingAllPluginDecorators from './utils/decorators'

import 'draft-js/dist/Draft.css'

interface TProps {
  post: string
  style?: React.CSSProperties
}

const PostReader = ({ post, ...props }: TProps) => {
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
        customStyleMap={stylesMap}
        plugins={plugins}
        readOnly
      />
    </Container>
  )
}

export default PostReader
