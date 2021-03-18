import styled from 'styled-components'

export const Container = styled.div`
  max-width: 49rem;
  width: 100%;

  .blockquote {
    padding-left: 8px;
    border-left: 2px solid #3342b4;
    font-style: italic;
  }

  .code-block {
    padding: 8px;
    background-color: #f5f5f5;
  }

  .video {
    width: 100%;
    height: 350px;
  }
`

const stylesMap: IObjectKeys = {
  red: {
    color: '#e53935'
  },
  orange: {
    color: '#ff5722'
  },
  yellow: {
    color: '#ffc107'
  },
  green: {
    color: '#087f23'
  },
  blue: {
    color: '#0069c0'
  },
  violet: {
    color: '#673ab7'
  },
  black: {
    color: 'black'
  },
  HIGHLIGHT: {
    backgroundColor: '#faed27'
  },
  CODE: {
    padding: '2px 8px',
    color: '#f03a47',
    backgroundColor: '#f5f5f5'
  }
}

interface IObjectKeys {
  [key: string]: any
}

export default stylesMap
