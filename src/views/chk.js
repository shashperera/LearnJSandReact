function test(arr, callback){
    arr.push(100);
    callback();
    console.log(arr);
}

var arr= [1,4,5,10];
console.log(arr);

test(arr,function(){
    console.log(arr+ "1")
});