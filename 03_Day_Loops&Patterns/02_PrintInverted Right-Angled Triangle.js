// Print Inverted Right-Angled Triangle

// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *
//  Reinforces decreasing nested loop structure.


function printInvertedRightAngledTriangle(row){
    
    for(let i=row;i>=1;i--){
            let stars="";
            for(let j =1;j<=i;j++){
              stars+="*";
            }
            console.log(stars)
    } 
}
printInvertedRightAngledTriangle(5)