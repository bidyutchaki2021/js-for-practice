//array 

const myArr=[1,5,9,7,6]
const myHeros=["SRK","Hritik"]
const myArr2=new Array(1,2,3,4,5)
//console.log(myArr[1]);

//Array methods

// myArr.push(7)
// myArr.push(3)
//  myArr.pop()


//myArr.unshift(10)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice,splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);