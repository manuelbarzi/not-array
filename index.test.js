const { expect } = require('chai')
const notArray = require('.')

describe('notArray', () => {
	describe('constructor', () => {
		it('should return an instance of notArray', () => {
			const narray = new notArray

			expect(narray).to.be.instanceOf(notArray)
		})

		it('should set the length with a single integer argument', () => {
			const narray = new notArray(10)

			expect(narray).to.have.lengthOf(10)
		})

		it('should fill it with a single non-integer argument', () => {
			const narray = new notArray('a')

			expect(narray).to.have.lengthOf(1)
			expect(narray[0]).to.equal('a')
		})

		it('should fill it with multiple integer arguments', () => {
			const narray = new notArray(1, 2, 3)

			expect(narray).to.have.lengthOf(3)
			for (let i = 0; i < narray.length; i++)
				expect(narray[i]).to.equal(i + 1)
		})

		it('should fill it with multiple non-integer arguments', () => {
			let obj
			const narray = new notArray(true, 'string', obj = {})

			expect(narray).to.have.lengthOf(3)
			
			expect(narray[0]).to.equal(true)
			expect(narray[1]).to.equal('string')
			expect(narray[2]).to.equal(obj)
		})
	})

	describe('index value assigment', () => {
		it('should set notArray length to index + 1 when index > length', () => {
			const narray = new notArray(10)

			narray[13] = 1

			expect(narray).to.have.lengthOf(14)
		})
	})

	describe('forEach', () => {
		it('should iterate for a non-empy notArray and evaluate the expression on each item', () => {
			const narray = new notArray(1, 2, 3)

			const result = []

			narray.forEach((value, index) => result[index] = value * 10)

			expect(result).to.deep.equal([10, 20, 30])
		})
	})

	describe('map', () => {
		it('should iterate for a non-empy notArray, evaluate the expression that provides a result on each item, and return a new notArray with all the results', () => {
			const narray = new notArray(1, 2, 3)

			const result = narray.map(value => value * 10)

            expect(result).not.to.equal(narray)
			expect(result).to.be.instanceOf(notArray)

			for (let i = 0; i < narray.length; i++)
				expect(result[i]).to.equal((i + 1) * 10)
		})
	})

	describe('filter', () => {
		it('should iterate for non-empy notArray, evaluate the expression that filters each item, and return a new notArray with the matching values', () => {
			const narray = new notArray(1, 2, 3)

			const result = narray.filter(value => value > 1)

            expect(result).not.to.equal(narray)
			expect(result).to.be.instanceOf(notArray)
			expect(result).to.have.lengthOf(narray.length - 1)

			for (let i = 1; i < narray.length; i++)
				expect(result[i - 1]).to.equal((i + 1))
		})
    })
    
    describe('slice', () => {
		it('should return a new notArray with the values within the index range', () => {
			const narray = new notArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

			const result = narray.slice(4, 7)

            expect(result).not.to.equal(narray)
			expect(result).to.be.instanceOf(notArray)
			expect(result).to.have.lengthOf(3)

			for (let i = 4; i < 7; i++)
				expect(result[i - 4]).to.equal(i + 1)
		})
	})
})
