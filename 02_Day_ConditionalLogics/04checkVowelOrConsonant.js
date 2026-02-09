// Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
//  Combines logical OR (||) operator and string comparisons.

function checkVowelOrConsonant(char){
    
    let string=char.toLocaleString()
    let lowerChar=string.toLowerCase();
    if(lowerChar == 'a' || lowerChar=='i' || lowerChar == 'e' || lowerChar =='o' || lowerChar=='u' )
    {
        return `${char} is a vowel`
    }
  else if(/[a-z]/.test(lowerChar)){
      return `${char} is a Consonant`
  }
    else{
          return `${char} is not a Valid Char`
    }
    
}



console.log(checkVowelOrConsonant('a'))
console.log(checkVowelOrConsonant('b'))
console.log(checkVowelOrConsonant(5))
