"use strict"

const rootRef = document.querySelector("#root")

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
// console.log('x', 0.1 + 0.2 === 0.3, (0.1 + 0.2))

// const val = "1.3d"
// const value = Number(val)
// const transformedVal = Number.parseInt(val)
// const transformedValue = Number.parseFloat(val)

// console.log('value', value)
// console.log("val", transformedValue);

// const isNumber = !Number.isNaN(value)
// console.log('isNumber', isNumber)

// const z = 0.1;
// const x = 0.2;
// console.log('z', z)
// console.log('x', x)
// const zx = 0.1 + 0.2
// const zxDec = (0.1 * 10 + 0.2 * 10)/10;
// console.log('zx', zx)
// console.log('zxDec', zxDec)
// console.log('zxDec===', zxDec===0.3)
// console.log('zx===', zx===0.3)

// const newNumber = new Number(7)
// console.log('newNum', typeof newNumber)
// console.log('newNumber', newNumber, JSON.stringify(newNumber))

//

//

// const a = 1323.4343
// const b = 434.434
// const c = 12.25
// const d = 2.8

// const dFloor = Math.floor(d) //повертає найменше ціле число
// console.log('dFloor', dFloor)

// const dCeil = Math.ceil(d)
// console.log('first', first)

// const x = "2k3jn23";
// const y = "2323.3232/233dfsd";
// const z = 123312;
// const q = 1231.23;

// const ix = parseInt(x);
// const fx = parseFloat(x)
// console.log('ix', ix, 'fx', fx)

// const iy = parseInt(y);
// const fy = parseFloat(y)
// console.log('iy', iy, 'fy', fy)

// const iz = parseInt(z);
// const fz = parseFloat(z)
// console.log('iz', iz, 'fz', fz)

// const iq = parseInt(q);
// const fq = parseFloat(q)
// console.log('iq', iq, 'fq', fq)

// const valX = "one";
// const valY = "1 one"

// const fValX = Number(valX)
// const fValY = Number(valY)

// console.log(typeof fValX, fValX)
// console.log(typeof fValY, fValY)

// const ffX = parseInt(valX)
// const ffY = parseInt(valY)

// console.log(typeof ffX, ffX)
// console.log(typeof ffY, ffY)

// console.log('isNan', Number.isNaN(ffX))
// console.log('isNan', Number.isNaN(ffY))

// if (!Number.isNaN(ffX)) {
//     console.log('ffX', ffX)
// } else if (!Number.isNaN(ffY)) {
//     console.log('ffy', ffY)
// } else { 
//     console.log('Not a Num')
// }

// const q = 1;
// const w = 1.1;
// const e = 1.8;
// const r = 1.5;

// console.log('Math.floor(q)', Math.floor(q))
// console.log('Math.floor(w)', Math.floor(w))
// console.log('Math.floor(e)', Math.floor(e))
// console.log('Math.floor(r)', Math.floor(r))

// console.log('Math.ceil(q)', Math.ceil(q))
// console.log('Math.ceil(w)', Math.ceil(w))
// console.log('Math.ceil(e)', Math.ceil(e))
// console.log('Math.ceil(r)', Math.ceil(r))

// console.log('Math.round(q)', Math.round(q))
// console.log('Math.round(w)', Math.round(w))
// console.log('Math.round(e)', Math.round(e))
// console.log('Math.round(r)', Math.round(r))


// console.log('Math.random()', Math.round(Math.random()*(10-1)+1))

// const str = "hello"
// const obj = { f: "world" }
// const arr = ["!", "!", "!"]

// console.log('test concat: ', str+obj.f+arr)
// const d = `sdsdd`
// console.log('d.length', d.length, typeof d)

// const str = "Lorem Ipsum has been the industry's standard number:10 and s ly five centuries,"

// const strIdx = str.indexOf("number:")
// const hasHas = str.includes("has")
// const hasBee = str.includes("bee")

// console.log('strIdx', strIdx)
// console.log('strNum', str[45])

// console.log('hasHas', hasHas)
// console.log('hasBee', hasBee)

// const fileNameFirst = "button.js"
// const filenameSecond = "button.css"

// const buttonScript = fileNameFirst.endsWith(".js")
// const buttonStyle = filenameSecond.endsWith(".css")

// console.log('buttonScript', buttonScript)
// console.log('buttonStyle', buttonScript)

// const files = ["button.js", "title.js, title.css", "header.js"]
// const filesStr = "button.js title.js title.css header.js"

// const newFiles = files.map(el => { 
//     const isJsFile = el.endsWith(".js")
//     if (isJsFile) { 
//         return el.replace(".js", ".ts")
//     }

//     return el
// })

// console.log('newFiles', newFiles)

// const updFiles = filesStr.replaceAll(".js", ".ts")

// console.log('updFiles', updFiles)


// const str = "number: 10"
// console.log('text', str.slice(0,6))

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// console.log(0 && age < 30); 
// console.log(1 && age < 30); 
// console.log(1 && 30); 
// console.log(1 && 0); 


console.log(1 || 2)
console.log(1 && 2)
console.log(0 || 5)
console.log(0 && 5)




// const arr = [];
// console.log('markup: ', arr.length  && "<p>Title</p>")



// rootRef.innerHTML = arr.length  ? "<p>Title</p>" : null
// console.log('rootRef', rootRef)

