import { compose, is, path, prop } from 'ramda'

export const isClassComponent = compose(is(Object), path(['prototype', 'isReactComponent']))

export const isComponent = compose(is(Function), prop('type'))

