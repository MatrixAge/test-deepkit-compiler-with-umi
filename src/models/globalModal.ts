import { makeAutoObservable } from 'mobx'
import { singleton } from 'tsyringe'

@singleton()
export default class GlobalModel {
	theme = 'light' as 'light' | 'dark'

	constructor() {
		makeAutoObservable(this, undefined, { autoBind: true })
	}
}
