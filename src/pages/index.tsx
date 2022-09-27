import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { container } from 'tsyringe'

import { valuesOf } from '@deepkit/type'

import Model from './model'

type test = 'a' | 'b'

console.log(valuesOf<test>())

const Index = () => {
	const [x] = useState(() => container.resolve(Model))

	console.log(x.a)

	return (
		<div>
			<h2>Yay! Welcome to umi!</h2>
			<p>
				To get started, edit <code>pages/index.tsx</code> and save to reload.
			</p>
		</div>
	)
}

export default observer(Index)
