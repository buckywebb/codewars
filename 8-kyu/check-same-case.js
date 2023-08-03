/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

/* My Answer */

//Handles everything except non-alphanumerics(:, @, %, etc)
function sameCase(a, b){
    if(!isNaN(a) || !isNaN(b)){
      return -1
    }else if(a == a.toLowerCase() && b == b.toLowerCase()){
      return 1
    }else if(a == a.toUpperCase() && b == b.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }


  /* Top Answer */
  function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }
  
   //comparing the .toUpperCase() and .toLowerCase() determines if parameters are nums or symbols bc they are the same either way(no case)