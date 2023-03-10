//Solutions for daily codewars
function getRealFloor(n) {
    if (n<=0) return n
    else if (n<=12) return n - 1
    else return n - 2
  }

//===========================

function findMultiples(integer, limit) {
  let arr = []
  for (let i = 1; integer * i <= limit; i++){
    arr.push(integer * i)
  }
  return arr;
}

//===========================

function peopleWithAgeDrink(old) {
  if (old < 14){
    return 'drink toddy'
  }else if(old < 18){
    return 'drink coke'
  }else if(old < 21){
    return 'drink beer'
  }else if(old >= 21){
    return 'drink whisky'
  }
};

//===========================

const plural = n => n !== 1;

//===========================