let n1=4;
let n2=49;
let n3=3;
let n4=6;
let n5=1;
let n6=84;
var txt='';
if (n1>n2 && n1>n3 && n1>n4 && n1>n5 && n1>n6) {
    txt='n1 is the greatest';
}
else if (n2>n1 && n2>n3 && n2>n4 && n2>n5 && n2>n6) {
    txt='n2 is the greatest';
}
else if(n3>n1 && n3>n2 && n3>n4 && n3>n5 && n3>n6){
    txt='n3 is the greatest';
}
else if(n4>n1 && n4>n2 && n4>n3 && n4>n5 && n4>n6){
    txt='n4 is the greatest';
}
else if(n5>n1 && n5>n2 && n5>n3 && n5>n4 && n5>n6){
    txt='n5 i sthe greatest';
}
else{
    txt='n6 is the greatest';
}

document.write(txt);
