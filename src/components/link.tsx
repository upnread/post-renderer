import React from 'react'

const Link = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData()
  return (
    <a href={url} rel='nofollow noreferrer' target='_blank'>
      {props.children}
    </a>
  )
}

export default Link
