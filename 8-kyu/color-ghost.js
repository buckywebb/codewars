/* Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red" */

/* My Answer = Incorrect */
var Ghost = function() {
    constructor() {
      this.color = colors[Math.floor(Math.random() * 4)]
    }
  }; 
  // No need for constructor. 
  
  // Below is my answer(correct) after seeing the proper syntax(my logic was correct)
  var Ghost = function() {
    let colors = ['white', 'yellow', 'purple', 'red']
      this.color = colors[Math.floor(Math.random() * 4)]
    }


  /* Top Answer */
  var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
  };