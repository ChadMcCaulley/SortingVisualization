/**
 * Update the element passed to the function
 * @param {Object} elt 
 * @param {String} className 
 * @param {Number} height 
 */
function updateElement (elt, className, height) {
  window.setTimeout(() => {
    elt.setAttribute("style", `height: ${height}px; width: ${5}px; background-color: ${className}`)
  }, 1000)
}

export {
  updateElement
}