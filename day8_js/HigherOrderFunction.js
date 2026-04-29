  Array = [1,2,3,4,5,6,7,8,9,10]

  Array.map((value, index , arr) => {
    return Array[index]=value*5;
  })
  console.log(Array);


//filter
let res = Array.filter((val, index, arr)=>val%2==0)
console.log(res)


//reduce
let ex = [10,20,30,40];
let sum = ex.reduce((acc, value)=>acc+value );
console.log(sum);