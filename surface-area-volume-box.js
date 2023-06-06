// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){{
    let surfaceArea = Number(2 * (width * depth + depth * height + width * height))
    let volume = Number(width * height * depth)
    let answerArr = [surfaceArea, volume]
    return answerArr
  }}
  
  
  // surface area = 2(wd + dh + wh)
  // volume = w * h * d