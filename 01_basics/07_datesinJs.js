//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate=new Date(2023,1,23,5,3)
// let myCreatedDate=new Date("2024-05-01")
 let myCreatedDate=new Date("01-05-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());

newDate.toLocaleDateString('default',{
    weekday:"long"
})

