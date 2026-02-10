// 1. Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****
// ✨ Teaches nested loops and increasing sequence printing.




function printRightAngledTriangle(row){
    
    for(let i=0;i<=row;i++){
            let stars="";
            for(let j =1;j<=i;j++){
              stars+="*";
              
            }
            console.log(stars)
    }
}

printRightAngledTriangle(5)