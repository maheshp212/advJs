/*
var - global and function scope
let - global and block scope
const - no later updation
*/
var v1 = 'v1';
let l1 = 'l1';
const c = 'hello';
if (true) {
    var v2 = 'v2';
    let l2 = 'l2';
    console.log('###############')
    console.log(v1);
    console.log(v2);
    console.log(l1);
    console.log(l2);
}
    console.log('###############')
    console.log(v1);
    console.log(v2);
    console.log(l1);
    //console.log(l2);    

function callMe() {
    var v3 = 'v3';
    let l3 = 'l3';
    console.log('###############')
    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(l1);
    //console.log(l2);
    console.log(l3);
}
callMe();
console.log('###############')
console.log(v1);
console.log(v2);
//console.log(v3);
console.log(l1);
//console.log(l2);
//console.log(l3);
