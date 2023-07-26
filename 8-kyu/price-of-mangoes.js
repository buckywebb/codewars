/* There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.*/

//prices are 3 for price of 2, any extras(not in groups of 3) are regular price

/* Answer */
function mango(quantity, price){
  let discounted = Math.floor(quantity / 3) * (price * 2)
  let regPriced = (quantity % 3) * price
  return discounted + regPriced
}