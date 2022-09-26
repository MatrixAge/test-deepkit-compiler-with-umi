import { makeAutoObservable } from 'mobx'
import { injectable } from 'tsyringe'

@injectable()
export default class Model {
	a = 0

	constructor() {
		makeAutoObservable(this)
	}
}
