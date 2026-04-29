// for loop :
for(let i=1;i<11;i++){
    console.log(i)
}

//while loop:
let num = 625;
let count = 0;
while (num%5==0){
    count++;
    num=num/5;
}
console.log(count);

//dowhile loop:
let a = 20;
let b = 30;
do{
    console.log(a);
    a++;
}
while(a<b);