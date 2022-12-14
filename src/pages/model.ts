import { makeAutoObservable } from 'mobx'
import { injectable } from 'tsyringe'

import GlobalModel from '@/models/globalModal'

@injectable()
export default class Model {
	a = 0

	constructor(public global: GlobalModel) {
		makeAutoObservable(this, undefined, { autoBind: true })
	}
}
