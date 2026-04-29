let fridge = {
    ColdDrink : "1",
    snacks : "Chips"
}
//shallow copy
let refriderator = fridge;
refriderator.ColdDrink = "0.5";
refriderator.snacks = "";

console.log(fridge)

//deep copy
let money = 1000;
let copyMoney = money;
copyMoney = 500;
console.log(money);