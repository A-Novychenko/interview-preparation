// "use strict"

// console.log('firstVarBefore', firstVar)

// console.log('x1', x)

// x = 5

// console.log('x', x)

// var firstVar

// console.log('firstVarAfter', firstVar)

// var x = y,


// y = 'A'

// // console.log('x', x)
// console.log('y', y)

// // var x = y,y = "A";
// // console.log(x + y); // undefinedA


// var x = 0;

// function f() {
//     var x = (y = 1); // x - объявляется локально. y - глобально!
//     console.log('xf', x)
// }
// f();

// console.log("x:",x, "y:",y); // 0, 1
// // значение x взято из глобальной переменной, как и ожидалось
// // значение переменной y доступно глобально


// const a = 1
// let b = 2
// var c = 3
// d = 4

// function foo () { 
//     var eee = 5
//     rrr = 10
//     const ccc = 5

//     return function () { 
//         console.log('eee', eee)
//         console.log('rrr', rrr)
//         console.log('ccc', ccc)
//     }
// }


// const closure = foo()

// console.dir(closure)

// console.log('window', window)

// console.log('window1', window)

// const foo1 = function () { 
//     console.log('foo1' )
// }

// function foo2 () { 
//     console.log('foo2' )
// }

// console.log('window', window)

// const a=1
// const b = () => 2
// let x

// const c = a && b()


// if (a) { 
//     x=b()
// }

// console.log('c', c)
// console.log('x', x)

// const arr = []
// arr[1]=null
// arr[6]=5
// console.log('arr.length', arr.length,  JSON.stringify(arr), arr)
// // console.log('first', JSON.stringify(arr))

// let a 

// const foo = (a) => Number(a)

// a = false

// console.log('foo', foo(a))

// console.log('Number.parseInt()', Number.parseFloat("x0"))
// console.dir(Number)
console.log('x', 0.1+0.2===0.3)