/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).*/

/* My Answer */
function pillars(numPill, dist, width) {
    if (numPill === 1){
      return 0
    }else{
      totalDistance = ((numPill -1) * dist) * 100
      innerPill = (numPill -2) * width
      return totalDistance + innerPill
    }
  }


  /* Top Answer */
//   function pillars(num_pill, dist, width) {
//     return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
//   }