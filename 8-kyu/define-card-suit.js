/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

/* MY ANSWER */
function defineSuit(card) {
    if(card.includes('♣')){
      return 'clubs'
    }else if(card.includes('♦')){
      return 'diamonds'
    }else if(card.includes('♥')){
      return 'hearts'
    }else {
      return 'spades'
    }
  }


  /* TOP ANSWER */
  function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }