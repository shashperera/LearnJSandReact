var str1 = "Ramy";
var str2 = "Mary";

isAnagram(str1,str2);

function isAnagram(first,second){
    var a= first.toLowerCase();
    var b= second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("")
    b= b.sort()
    b = b.join("");

    console.log( a=== b);

}