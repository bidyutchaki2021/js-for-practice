//singleton
//object.create

//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Bidyut",
    "full name":"bidyut chaki",
    [mySym]:"mykey1",
    age:18,
    location:"kolkata",
    email:"bidyut@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="bidyut@yahoo.com"
//Object.freeze(JsUser)
JsUser.email="bidyut@outlook.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
console.log("hello this is js");