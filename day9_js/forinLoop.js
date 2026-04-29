let student = {
    name:"Meet",
    course:"B.Tech",
    fees:140000
}
for (let key in student){
    console.log(key)
}
for (let key in student){
    console.log(student[key])
}
for (let key in student){
    console.log(key+":"+student[key])
}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

