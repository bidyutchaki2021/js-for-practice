const marvel_heros=["ironman","thor","strange"]
const dc_heros=["superman","batman","flash"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);
//spread operator
const all_new_heros=[...marvel_heros,...dc_heros]

console.log(all_new_heros);

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("Bidyut"))
console.log(Array.from("Bidyut"))
console.log(Array.from({name:"Bidyut"}))//interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));