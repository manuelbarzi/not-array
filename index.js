const notArray = (() => {
	const integer = /^\+?(0|[1-9]\d*)$/

	const handler = {
		defineProperty(target, property, descriptor) {
			if (!Reflect.has(target, property)) {
				if (integer.test(property)) {
					const index = Number(property)

					if (index >= target.length) target.length = index + 1
				}
			}

			return Reflect.defineProperty(target, property, descriptor)
		}
	}

	return class {
		constructor() {
			this.length = 0

			const array = new Proxy(this, handler)

			if (arguments.length === 1 && typeof arguments[0] === 'number') array.length = arguments[0]
			else for (let i = 0; i < arguments.length; i++) array[i] = arguments[i]

			return array
		}
		
		forEach(cb) {
			if (typeof cb !== 'function') throw TypeError(cb + ' is not a function')

			for (let i = 0; i < this.length; i++) cb(this[i], i, this)
		}

		map(cb) {
			const target = new notArray

			for (let i = 0; i < this.length; i++) target[i] = cb(this[i], i, this)

			return target
		}

		filter(cb) {
			const target = new notArray

			for (let i = 0; i < this.length; i++) if (cb(this[i], i, this)) target[target.length] = this[i]

			return target
		}

		slice(begin, end) {
			begin = begin || 0
			begin = begin < 0 ? this.length + begin : begin
			end = end || this.length
			end = end < 0 ? this.length + end : end

			const target = new notArray

			for (let i = begin; i < end; i++)
				target[target.length] = this[i]

			return target
		}
	}
})()

if (typeof module === 'object') module.exports = notArray
