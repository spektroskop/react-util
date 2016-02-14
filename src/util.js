import { compose, is, path } from 'ramda'

export const isClassComponent = compose(
	is(Object), path(['prototype', 'isReactComponent'])
)

