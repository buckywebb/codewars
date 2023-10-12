/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */

/* MY ANSWER */
function isIsogram(str){
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
        return false
      }
    }
    return true
  }
  
  //loop through w for loop
  // if indexOf() !== lastIndexOf() --> is not an isogram