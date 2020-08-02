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
const quickButton = document.getElementById('quick-button')
const heapButton = document.getElementById('heap-button')

const numBars = 200
let bars = []
let barSizes = []
let totalWaitTime = 0
let perCallWait = 20

/**
 * Event Listeners
 */
randomizeButton.addEventListener("click", createBars)
bubbleButton.addEventListener("click", () => {
  sortPrep ()
  bubble(bars, barSizes)
  enableButtons()
})
mergeButton.addEventListener("click", () => {
  sortPrep ()
  mergeSort(bars, barSizes)
  enableButtons()
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
 * Create a new set of random bars
 */
function createBars () {
  const width = getWidth() 
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
 * Update the width of the bars and set/remove text based on their width 
 */
function updateBarsWidth  () {
  const width = getWidth() 
  bars.forEach(bar => {
    const height = parseInt(bar.style.height)
    setText(bar, width, height)
    bar.setAttribute('style', `height: ${height}px; width: ${width}px;`)
  })
}

/**
 * Reset the color of all bars
 */
function resetBarsColor () {
  bars.forEach(bar => { bar.className = '' })
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
 * Disable all sorting buttons
 */
function disableButtons () {
  const sortingButtons = document.querySelectorAll("button.btn-option")
  sortingButtons.forEach(btn => { btn.disabled = true })
}

/**
 * Enable all sorting buttons
 */
function enableButtons () {
  window.setTimeout(() => {
    const sortingButtons = document.querySelectorAll("button.btn-option")
    sortingButtons.forEach(btn => { btn.disabled = false })
  }, totalWaitTime += perCallWait)
}

/**
 * Prep the bars for sorting by reseting their color, disabling buttons, and resetting total wait time
 */
function sortPrep () {
  totalWaitTime = 0
  disableButtons()
  resetBarsColor()
}

window.onload = createBars()
window.addEventListener('resize', () => { updateBarsWidth () })

/**
 * Update the element passed to the function
 * @param {Object} elt 
 * @param {String} className 
 * @param {Number} height 
 */
const updateElement = (elt, className, height) => {
  window.setTimeout(() => {
    const width = parseInt(elt.style.width)
    setText(elt, width, height)
    elt.className = className
    elt.setAttribute("style", `height: ${height}px; width: ${width}px;`)
  }, totalWaitTime += perCallWait)
}

export {
  updateElement
}