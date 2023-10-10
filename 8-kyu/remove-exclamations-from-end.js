/* Remove all exclamation marks from the end of sentence. */

/* MY ANSWER(no regex) */
function remove (string) { 
    let str_arr = string.split('')
    while (str_arr[str_arr.length - 1] === '!') {
      str_arr.pop()
    }
    let newStr = str_arr.join('')
    return newStr
  }

