import bubble from "./sortingAlgorithms/bubble.js"
import merge from "./sortingAlgorithms/merge.js"
import heap from "./sortingAlgorithms/heap.js"
import quick from "./sortingAlgorithms/quick.js"
import "../styles/main.scss"

/**
 * Elements
 */
const arrayContainer = document.getElementById('array-container')
const randomizeButton = document.getElementById('randomize-button')
const bubbleButton = document.getElementById('bubble-button')

const numBars = 50
let bars = []
let barSizes = []
let previousTime = 0

/**
 * Event Listeners
 */
randomizeButton.addEventListener("click", createBars)
bubbleButton.addEventListener("click", () => {
  previousTime = 0
  bubble(bars, barSizes, updateElement)
})

/**
 * Get a random integer from a given range
 * @param {Number} min 
 * @param {Number} max 
 */
function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Create the array
 * @param {Boolean} createNew
 */
function createBars (createNew = true) {
  const width = getWidth() 
  if (!createNew) {
    return bars.forEach(bar => {
      bar.setAttribute('style', `height: ${parseInt(bar.style.height)}px; width: ${width}px;`)
    })
  }
  arrayContainer.innerHTML = ''
  for (let i = 0; i < numBars; i++) {
    const height = randomIntFromInterval(5, 800)
    const newBar = document.createElement('div')
    newBar.setAttribute('style', `height: ${height}px; width: ${width}px;`)
    bars.push(newBar)
    barSizes.push(height)
    arrayContainer.appendChild(newBar)
  }
}

/**
 * Get the width for each
 */
function getWidth () {
  return Math.floor(window.innerWidth * 0.8 / numBars)
}

/**
 * Update the element passed to the function
 * @param {Object} elt 
 * @param {String} className 
 * @param {Number} height 
 */
function updateElement (elt, className, height) {
  window.setTimeout(() => {
    const width = parseInt(elt.style.width)
    elt.className = className
    elt.setAttribute("style", `height: ${height}px; width: ${width}px;`)
  }, previousTime += 10)
}

window.onload = createBars()
window.addEventListener('resize', () => {
  createBars(false)
})
