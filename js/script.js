// commeent header

'use strict'
/**
 * This function calculates area and volume of sphere.
 */
function enterclicked () {
  // input
  const radius = parseInt(document.getElementById('radius').value)
  // process
  
  const volume =  1.333 * Math.PI * radius * radius * radius 
  
  // output
  document.getElementById('volume').innerHTML = '<p>volume is: ' + volume.toFixed(2) + ' cm³</p>'
}
