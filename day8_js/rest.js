function add(a,...b){
    let sum=0;
    for(let i=0;i<b.length;i++){
        sum = sum+b[i];
    }
    console.log(a+sum);
}
add(1,2,3,4);