import bubble from "./sortingAlgorithms/bubble.js"
import mergeSort from "./sortingAlgorithms/merge.js"
import heap from "./sortingAlgorithms/heap.js"
import quick from "./sortingAlgorithms/quick.js"
import "../styles/main.scss"

/**
 * Elements
 */
const arrayContainer = document.getElementById('array-container')
const randomizeButton = document.getElementById('randomize-button')
const bubbleButton = document.getElementById('bubble-button')
const mergeButton = document.getElementById('merge-button')

const numBars = 200
let bars = []
let barSizes = []
let totalWaitTime = 0
let perCallWait = 10

/**
 * Event Listeners
 */
randomizeButton.addEventListener("click", createBars)
bubbleButton.addEventListener("click", () => {
  totalWaitTime = 0
  bubble(bars, barSizes)
})
mergeButton.addEventListener("click", () => {
  totalWaitTime = 0
  mergeSort(bars, barSizes, 0, barSizes.length - 1)
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
      const height = parseInt(bar.style.height)
      setText(bar, width, height)
      bar.setAttribute('style', `height: ${height}px; width: ${width}px;`)
    })
  }
  arrayContainer.innerHTML = ''
  bars = []
  barSizes = []
  for (let i = 0; i < numBars; i++) {
    const height = randomIntFromInterval(5, 800)
    const newBar = document.createElement('div')
    newBar.setAttribute('style', `height: ${height}px; width: ${width}px;`)
    setText(newBar, width, height)
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
 * Get the width for each
 */
function setText (elt, width, height) {
  elt.innerText = width > 35 && height > 20 ? height : ""
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
    setText(elt, width, height)
    elt.className = className
    elt.setAttribute("style", `height: ${height}px; width: ${width}px;`)
  }, totalWaitTime += perCallWait)
}

window.onload = createBars()
window.addEventListener('resize', () => {
  createBars(false)
})

export {
  updateElement
}