let num=[10,20,30];
let max=num[0];

for(let i=1;i<num.length;i++){
    if(num[i]>max){
        max=num[i];
    }
}
console.log("Maximum number is: ",max);