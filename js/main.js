import bubble from "./sortingAlgorithms/bubble.js"
import mergeSort from "./sortingAlgorithms/merge.js"
import heapSort from "./sortingAlgorithms/heap.js"
import "../styles/main.scss"

/**
 * Elements
 */
const arrayContainer = document.getElementById('array-container')
const randomizeButton = document.getElementById('randomize-button')
const bubbleButton = document.getElementById('bubble-button')
const mergeButton = document.getElementById('merge-button')
const heapButton = document.getElementById('heap-button')
const barRange = document.getElementById('bar-range')
const barRangeValue = document.getElementById('bar-range-value')
const timeRange = document.getElementById('time-range')
const timeRangeValue = document.getElementById('time-range-value')

const maxSpeed = 80
const minSpeed = 10

let maxBars = 5
let numBars = 300
let createBarsTimeout = null
let bars = []
let barSizes = []
let totalWaitTime = 0
let perCallWait = 40

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
heapButton.addEventListener("click", () => {
  sortPrep ()
  heapSort(bars, barSizes)
  enableButtons()
})
barRange.addEventListener("input", (event) => {
  window.clearTimeout(createBarsTimeout)
  createBarsTimeout = window.setTimeout(() => { createBars() }, 100)
  numBars = event.target.value
  barRangeValue.innerText = numBars
})
timeRange.addEventListener("input", (event) => {
  const val = event.target.value
  timeRangeValue.innerText = val
  perCallWait = parseInt(val)
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
 * Set the maximum number of bars
 */
function setMaxBars () {
  maxBars = parseInt((window.innerWidth - 20) / 4)
  if (numBars > maxBars) {
    numBars = maxBars
    barRangeValue.innerText = maxBars
  }
  barRange.max = maxBars
}

/**
 * Create a new set of random bars
 */
function createBars () {
  const width = getBarWidth() 
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
  const width = getBarWidth() 
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
function getBarWidth () {
  return Math.floor(window.innerWidth / numBars)
}

/**
 * Set the text for each bar based on the width and height
 * @param {Element} elt
 * @param {Float} width
 * @param {Integer} height
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
  barRange.disabled = true
  randomizeButton.disabled = true
}

/**
 * Enable all sorting buttons
 */
function enableButtons () {
  window.setTimeout(() => {
    const sortingButtons = document.querySelectorAll("button.btn-option")
    sortingButtons.forEach(btn => { btn.disabled = false })
    barRange.disabled = false
    randomizeButton.disabled = false
  }, totalWaitTime += perCallWait)
}


/**
 * Enable all sorting buttons
 */
function setSpeedMinMax () {
  timeRange.max = maxSpeed
  timeRange.min = minSpeed
  timeRange.value = perCallWait
  timeRangeValue.innerText = perCallWait
}

/**
 * Prep the bars for sorting by reseting their color, disabling buttons, and resetting total wait time
 */
function sortPrep () {
  totalWaitTime = 0
  disableButtons()
  resetBarsColor()
}

window.onload = () => {
  setMaxBars()
  setSpeedMinMax()
  createBars()
}
window.addEventListener('resize', () => {
  setMaxBars()
  updateBarsWidth ()
})

/**
 * Update the element passed to the function
 * @param {Object} elt 
 * @param {String} className 
 * @param {Number} height 
 */
const updateElement = (elt, className, height = null) => {
  window.setTimeout(() => {
    const width = parseInt(elt.style.width)
    setText(elt, width, height)
    elt.className = className
    if (!height) height = parseInt(elt.style.height)
    elt.setAttribute("style", `height: ${height}px; width: ${width}px;`)
  }, totalWaitTime += perCallWait)
}

export {
  updateElement
}