function update(){
    console.log("event is fired");
    //create variable
    var x=10;
    var y=20;
    console.log(x*y)
    //create function in js
function sum(a,b){

    return a+b;
    //if i want to assign func to variable
    var mysum = sum;
    console.log(mysum)
}
}
