// function callback(){
//     console.log("call back");
// }

// var add = function(a,b,callback){
//     sum= a+b;
//     console.log(sum)
//     callback();
// }

// add(2,3,callback);

var add =(a,b,callback) => {
    sum = a+b;
    console.log(sum);
    callback();
}

add(3,4,()=>console.log("Add"))