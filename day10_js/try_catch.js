try {
    a = 5;
    b = 0;
    if (a==0 || b==0){
        throw new Error("Cant divide with zero!")
    }
    console.log(b/a);
    console.log(JSON.parse(`{name:"Meet, city:"vadodara }`))

} catch (error) {
    console.log(error);
}
finally{
    console.log("I will run no matter what")
}

console.log("Meet   Prajapatii");



// a = 5;
// b = 0;
// if (a==0 || b==0){
//     throw new Error("Cant divide with zero!")
// }
// console.log(b/a);

// console.log("Meet   Prajapatii");