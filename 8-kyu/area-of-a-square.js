/* Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

*img of red square with arc(A)*

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
/* 

/* My Answer */
function squareArea(A){
    let r = (A * 4) / (2 * Math.PI)
    return Number((r * r).toFixed(2))
  }