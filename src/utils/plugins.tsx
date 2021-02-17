import React from 'react'
import styled from 'styled-components'

import { composeDecorators } from '@draft-js-plugins/editor'
import createLinkifyPlugin from '@draft-js-plugins/linkify'
import createHashtagPlugin from 'draft-js-hashtag-plugin'
import createImagePlugin from '@draft-js-plugins/image'
import createAlignmentPlugin from '@draft-js-plugins/alignment'
import createFocusPlugin from '@draft-js-plugins/focus'
import createResizeablePlugin from '@draft-js-plugins/resizeable'
import createDividerPlugin from '@draft-js-plugins/divider'
import createVideoPlugin from '@draft-js-plugins/video'

import 'prismjs/themes/prism.css'
import 'draft-js-hashtag-plugin/lib/plugin.css'
import '@draft-js-plugins/alignment/lib/plugin.css'
import '@draft-js-plugins/image/lib/plugin.css'

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a3a2a8;
`

const focusPlugin = createFocusPlugin()
const resizeablePlugin = createResizeablePlugin({})
const alignmentPlugin = createAlignmentPlugin()
const hashtagPlugin = createHashtagPlugin()

const videoDecorator = composeDecorators(focusPlugin.decorator)
const decorator = composeDecorators(
  alignmentPlugin.decorator,
  resizeablePlugin.decorator,
  focusPlugin.decorator
)

const videoPlugin = createVideoPlugin({
  decorator: videoDecorator,
  theme: {
    iframe: 'video',
    iframeContainer: '',
    invalidVideoSrc: '',
    video: ''
  }
})

const linkifyPlugin = createLinkifyPlugin({
  component: (props: any) => (
    <a
      {...props}
      style={{ cursor: 'pointer', color: '#619bd1' }}
      onClick={() => window.open(props.href)}
    />
  )
})

const dividerPlugin = createDividerPlugin({
  decorator,
  dividerComponent: () => <Divider />
})

const imagePlugin = createImagePlugin({ decorator })

const plugins = [
  imagePlugin,
  videoPlugin,
  linkifyPlugin,
  hashtagPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  dividerPlugin
]

export default plugins
