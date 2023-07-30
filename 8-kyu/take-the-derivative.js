/*This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

example: derive(7,8) --> "56x^7" (answer should be a string) */

/* Answer*/
const derive = (c, e) => (c * e) + "x^" + (e - 1)