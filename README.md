# Simple remake of [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Demo

```js
const notArray = require('not-array')

const array = new notArray(10)
console.log('array length =>', array.length) // => 10

array[0] = 'a'
console.log('array with value at index 0 =>', array)  // => { '0': 'a', length: 10 }

array[10] = 'b'
console.log('array with value at index 10 =>', array)  // => { '0': 'a', 10: 'b', length: 11 }

console.log('for-each loop to console =>')
array.forEach((value, index) => console.log(`value at index ${index} =>`, value)) // =>
// a
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// b

const array2 = array.map((value, index) => `value at index ${index} => ${value}`)
console.log('map loop result =>', array2) // => 
// { '0': '0 => a',
//   '1': '1 => undefined',
//   '2': '2 => undefined',
//   '3': '3 => undefined',
//   '4': '4 => undefined',
//   '5': '5 => undefined',
//   '6': '6 => undefined',
//   '7': '7 => undefined',
//   '8': '8 => undefined',
//   '9': '9 => undefined',
//   '10': '10 => b',
//   length: 11 }
```