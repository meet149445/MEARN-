// function declaration
function add(a,b){
    console.log(a+b);
}
add(7,10);
add(11,10);

function mul(a,b){
    return a*b;
}
mul(10,4);
let multi = mul(10,4);
console.log(multi);


//function expression
const sub = function(a,b){
    return a-b;
}

let subt = sub(9,4);
console.log(subt);


//arrow function
let div=(a,b) =>a/b;
let division = div(4,2);
console.log(division);


// default parameter
let fullname = function(fname , lname = "Bhai"){
    console.log(fname + lname);
}
fullname("Meet ")


