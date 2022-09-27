import { makeAutoObservable } from 'mobx'
import { injectable } from 'tsyringe'

@injectable()
export default class GlobalModel {
	theme = 'light' as 'light' | 'dark'

	constructor() {
		makeAutoObservable(this, undefined, { autoBind: true })
	}
}
