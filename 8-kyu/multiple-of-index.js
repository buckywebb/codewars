/* Multiple of Index - Return a new array consisting of elements which are multiple of their own index in input array (length > 1). */

/* Answer */

function multipleOfIndex(array) {
    let multiplesOfIndex = []
    for (let i = 0; i <= array.length - 1; i++){
      if (array[i] === 0 || array[i] % i === 0){ /* array[i] === 0 needed bc 0 % 0 === NaN */
        multiplesOfIndex.push(array[i])
      }
    }
    return multiplesOfIndex
  }

  /* Most popular answers use filter() method instead of for loop + conditional

  let multipleOfIndex = a => a.filter((n, i) => n % i === 0);

  */