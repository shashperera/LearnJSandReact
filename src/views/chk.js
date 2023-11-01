var x = 2;
if(2){
    eval(function p(){});
    x += typeof p;
}

console.log(x);

var c = 2;
if(2){
    function d(){}
    c += typeof d;
}

console.log(c);