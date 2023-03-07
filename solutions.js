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