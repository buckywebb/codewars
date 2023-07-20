/*Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.*/

/* Answer */
function sayHello( name, city, state ) {
    let nameStr = name.join(' ')
    return `Hello, ${nameStr}! Welcome to ${city}, ${state}!`
  }
  
  //join name array with space BEFORE each element
  //plug name string, city, and state into a template literal
  //return the template literal

  /* Can be done in one line if the name.join(' ') is placed directly into template literal 

  const sayHello = (name, city, state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  
  */
