import { List } from 'immutable'

const KEY_SEPARATOR = '-'

function MultiDecorator(decorators) {
  this.decorators = List(decorators)
}

MultiDecorator.prototype.getDecorations = function (block, contentState) {
  var decorations = Array(block.getText().length).fill(null)

  this.decorators.forEach(function (decorator, i) {
    var _decorations = decorator.getDecorations(block, contentState)

    _decorations.forEach(function (key, offset) {
      if (!key) {
        return
      }

      key = i + KEY_SEPARATOR + key

      decorations[offset] = key
    })
  })

  return List(decorations)
}

MultiDecorator.prototype.getComponentForKey = function (key) {
  var decorator = this.getDecoratorForKey(key)
  return decorator.getComponentForKey(this.getInnerKey(key))
}

MultiDecorator.prototype.getPropsForKey = function (key) {
  var decorator = this.getDecoratorForKey(key)
  return decorator.getPropsForKey(this.getInnerKey(key))
}

MultiDecorator.prototype.getDecoratorForKey = function (key) {
  var parts = key.split(KEY_SEPARATOR)
  var index = Number(parts[0])

  return this.decorators.get(index)
}

MultiDecorator.prototype.getInnerKey = function (key) {
  var parts = key.split(KEY_SEPARATOR)
  return parts.slice(1).join(KEY_SEPARATOR)
}

export default MultiDecorator
