
const value=[value[0],value[1],value[2],value[3],value[4],value[5],value[6],value[7],value[8],value[9],value[10]];
value[0]=0;
value[1]=1;
value[2]=2;
value[3]=3;
value[4]=4;
value[5]=5;
value[6]=6;
value[7]=7;
value[8]=8;
value[9]=9;
value[10]=10;

function add(num1,num2)
{
const int a=value[5];
const int b=value[3];
add(a,b);
Let d=num1+num2;
return d;

}

function subtract(num1,num2)
{
const int a=value[10];
const int b=value[2];
subtract(a,b);
int d=num1-num2;
return d;
}
function multiply(num1,num2,num3)
{
const int a=value[7];
const int b=value[8];
const int c=value[3];
multiply(a,b,c);
int d=num1*num2*num3;
return d;
}
console.log(Input:[[value[5],value[3],'add'],[value[10],value[2],'subtract'],[value[7],value[8],value[3],'multiply'],'multiply']);
console.log(Output:add(),subtract()=multiply());
console.log(Input:[[value[2],value[3],value[4],'add'],[value[4],value[1],'subtract'],[value[7],value[8],value[3],'multiply'],'multiply']);
console.log(Output:add()=multiply());
console.log(Input:[[value[5],value[5],value[2]'multiply'],[value[2],value[5],'add'],[value[10],value[2],value[0],'divide'],'add']);
console.log(Output:multiply(),add()=add());
console.log(Input:[[[value[10],value[5],value[0]'divide'],[value[2],value[3],value[4]'multiply']],'add'],'multiply']);
console.log(Output:divide(),multiply()=multiply());
console.log(Input:[[value[5],value[2],value[3],value[4],'add'],[],[[value[3],value[3],'multiply'],[value[2],value[2],'add']],'add']);
console.log(Output:add(),multiply(),add());





