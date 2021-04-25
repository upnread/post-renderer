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

  .DraftEditor-editorContainer,
  .DraftEditor-root,
  .public-DraftEditor-content {
    height: inherit;
    text-align: initial;
  }
  .public-DraftEditor-content[contenteditable='true'] {
    -webkit-user-modify: read-write-plaintext-only;
  }
  .DraftEditor-root {
    position: relative;
  }
  .DraftEditor-editorContainer {
    background-color: rgba(255, 255, 255, 0);
    border-left: 0.1px solid transparent;
    position: relative;
    z-index: 1;
  }
  .public-DraftEditor-block {
    position: relative;
  }
  .DraftEditor-alignLeft .public-DraftStyleDefault-block {
    text-align: left;
  }
  .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {
    left: 0;
    text-align: left;
  }
  .DraftEditor-alignCenter .public-DraftStyleDefault-block {
    text-align: center;
  }
  .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
  .DraftEditor-alignRight .public-DraftStyleDefault-block {
    text-align: right;
  }
  .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {
    right: 0;
    text-align: right;
  }
  .public-DraftEditorPlaceholder-root {
    color: #9197a3;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .public-DraftEditorPlaceholder-hasFocus {
    color: #bdc1c9;
  }
  .DraftEditorPlaceholder-hidden {
    display: none;
  }
  .public-DraftStyleDefault-block {
    position: relative;
    white-space: pre-wrap;
  }
  .public-DraftStyleDefault-ltr {
    direction: ltr;
    text-align: left;
  }
  .public-DraftStyleDefault-rtl {
    direction: rtl;
    text-align: right;
  }
  .public-DraftStyleDefault-listLTR {
    direction: ltr;
  }
  .public-DraftStyleDefault-listRTL {
    direction: rtl;
  }
  .public-DraftStyleDefault-ol,
  .public-DraftStyleDefault-ul {
    margin: 16px 0;
    padding: 0;
  }
  .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {
    margin-left: 1.5em;
  }
  .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {
    margin-right: 1.5em;
  }
  .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {
    margin-left: 3em;
  }
  .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {
    margin-right: 3em;
  }
  .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {
    margin-left: 4.5em;
  }
  .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {
    margin-right: 4.5em;
  }
  .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {
    margin-left: 6em;
  }
  .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {
    margin-right: 6em;
  }
  .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {
    margin-left: 7.5em;
  }
  .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {
    margin-right: 7.5em;
  }
  .public-DraftStyleDefault-unorderedListItem {
    list-style-type: square;
    position: relative;
  }
  .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {
    list-style-type: disc;
  }
  .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {
    list-style-type: circle;
  }
  .public-DraftStyleDefault-orderedListItem {
    list-style-type: none;
    position: relative;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {
    left: -36px;
    position: absolute;
    text-align: right;
    width: 30px;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {
    position: absolute;
    right: -36px;
    text-align: left;
    width: 30px;
  }
  .public-DraftStyleDefault-orderedListItem:before {
    content: counter(ol0) '. ';
    counter-increment: ol0;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {
    content: counter(ol1, lower-alpha) '. ';
    counter-increment: ol1;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {
    content: counter(ol2, lower-roman) '. ';
    counter-increment: ol2;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {
    content: counter(ol3) '. ';
    counter-increment: ol3;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {
    content: counter(ol4, lower-alpha) '. ';
    counter-increment: ol4;
  }
  .public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {
    counter-reset: ol0;
  }
  .public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {
    counter-reset: ol1;
  }
  .public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {
    counter-reset: ol2;
  }
  .public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {
    counter-reset: ol3;
  }
  .public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {
    counter-reset: ol4;
  }

  /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #f5f2f0;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    /* This background color was intended by the author of this theme. */
    background: hsla(0, 0%, 100%, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
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

export function colorStyleMap(primaryColor: string) {
  const primaryColorMap: IObjectKeys = {
    ...stylesMap,
    primary: {
      color: primaryColor
    }
  }

  return primaryColorMap
}

interface IObjectKeys {
  [key: string]: any
}

export default colorStyleMap
