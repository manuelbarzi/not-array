# Simple remake of Array

## usage

```js
const narray = new notArray(10)
console.log(narray.length) // => 10

narray[0] = 'a'
console.log(narray)  // => { '0': 'a', length: 10 }

narray[10] = 'b'
console.log(narray)  // => { '0': 'a', 10: 'b', length: 11 }

narray.forEach(value => console.log(value)) // =>
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

const narray2 = narray.map((value, index) => `${index} => ${value}`)
console.log(narray2) // => 
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