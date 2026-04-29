let object = {
    name:"Meet",
    course:"IT",
    acc_bal:150000,
    get balance(){
        console.log(this.acc_bal);
    },
    set updatebalance(value){
        this.acc_bal=value;
    }
}
object.updatebalance=100000
object.balance
