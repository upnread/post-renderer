import { CompositeDecorator } from 'draft-js'
import PrismDecorator from 'draft-js-prism'
import Prism from 'prismjs'

import MultiDecorator from '../lib/multi-decorators'

import Link from '../components/link'

import plugins from './plugins'

function getPluginDecoratorArray() {
  let decorators: any = []
  let plugin

  for (plugin of plugins) {
    if (plugin.decorators !== null && plugin.decorators !== undefined) {
      decorators = decorators.concat(plugin.decorators)
    }
  }
  return decorators
}

function findLinkEntities(contentBlock: any, callback: any, contentState: any) {
  contentBlock.findEntityRanges((character: any) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    )
  }, callback)
}

function grabbingAllPluginDecorators() {
  const prismDecorator = new PrismDecorator({
    prism: Prism,
    defaultSyntax: 'javascript'
  })

  const decoratorLink = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link
    }
  ])

  return new (MultiDecorator as any)([
    prismDecorator,
    decoratorLink,
    new CompositeDecorator(getPluginDecoratorArray())
  ])
}

export default grabbingAllPluginDecorators
