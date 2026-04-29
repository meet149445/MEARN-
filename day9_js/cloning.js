let mobile = {
    brand:"Apple",
    price:74000,
    intro:function(){
        console.log(`${this.brand} : ${this.price}`)
    }
}
let copyMobile = {...mobile};
copyMobile.brand = "samsung";
console.log(mobile);
console.log(copyMobile);
copyMobile.intro();


//object assign : shallow copy

let name = {
    name : "Meet"
}
let newName = Object.assign(name);
newName.name = "Maitri"
console.log(name);
console.log(newName);