// Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.

function printPyramidPattern(row){
    for(let i=1;i<=row;i++){
        let stars="";   
        for(let j=1;j<=row-i;j++){
            stars+=" ";
        }
        for(let k=1;k<=2*i-1;k++){
            stars+="*";
        }
        console.log(stars)
    }
}
printPyramidPattern(5)