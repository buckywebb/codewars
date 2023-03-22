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

function well(x){
  const goods = x.reduce((count, element) => (element === 'good' ? count + 1 : count), 0)
  if (goods > 2){
    return 'I smell a series!'
  }else if (goods === 0){
    return 'Fail!'
  }else{
    return 'Publish!'
  }
}

//===========================

const nameShuffler = str => str.split(' ').reverse().join(' ')

//===========================

const xor = (a, b) => a !== b;

//===========================

const saleHotdogs = n => n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90

//===========================

function addFive(num) {
  var total = num + 5
  return total
}

//===========================

function mergeArrays(arr1, arr2) {
  //merge the two arrays
  let merged = arr1.concat(arr2)

  //sort them in ascending order
  merged.sort((a, b) => a -b)
  
  //filter out duplicates and return the array
  return merged.filter((item, index, inputArray) => inputArray.indexOf(item) === index)
}

//=============================

//My Answer
function warnTheSheep(queue) {
  let first = queue.length - 1
  let wolf = queue.indexOf('wolf')
  let warn = first - wolf
  if(wolf === first){
    return 'Pls go away and stop eating my sheep'
  }else{
    return `Oi! Sheep number ${warn}! You are about to be eaten by a wolf!`
  }
}


//Best practice
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

//=================================

const getChar = c => String.fromCharCode(c)

//=================================

const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide';

//=================================

const _if = (bool, func1, func2) => bool ? func1() : func2()

//=================================
//My Way
function hello(name = 'World') {
  if(name == ''){
    name = 'World'
  }
  return "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!"
}

// OR (best way on codewars)

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

// OR (second best on codewars, close to my way)

function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}