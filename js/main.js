import bubble from "./sortingAlgorithms/bubble.js"
import mergeSort from "./sortingAlgorithms/merge.js"
import heapSort from "./sortingAlgorithms/heap.js"
import quickSort from "./sortingAlgorithms/quick.js"
import "../styles/main.scss"

/**
 * Elements
 */
const arrayContainer = document.getElementById('array-container')
const randomizeButton = document.getElementById('randomize-button')
const barRange = document.getElementById('bar-range')
const barRangeValue = document.getElementById('bar-range-value')
const timeRange = document.getElementById('time-range')
const timeRangeValue = document.getElementById('time-range-value')

const maxDelay = 500
const minDelay = 1

let maxBars = 5
let numBars = 100
let createBarsTimeout = null
let bars = []
let barSizes = []
let totalWaitTime = 0
let perCallWait = 20

/**
 * Event Listeners
 */
randomizeButton.addEventListener("click", () => {
  createBars()
  totalWaitTime = 0
  enableButtons()  
})
addButtonEvents ()
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
 * Add click events to all buttons in the button container
 */
function addButtonEvents () {
  const btns = document.querySelectorAll(".btn-container > button")
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      sortPrep ()
      const sortType = btn.id.split('-')[0].toLowerCase()
      if (sortType === 'bubble') bubble(barSizes)
      else if (sortType === 'merge') mergeSort(barSizes)
      else if (sortType === 'quick') quickSort(barSizes)
      else if (sortType === 'heap') heapSort(barSizes)
      enableButtons()
    })
  })
}
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
  timeRange.disabled = true
}

/**
 * Enable all sorting buttons
 */
function enableButtons () {
  window.setTimeout(() => {
    const sortingButtons = document.querySelectorAll("button.btn-option")
    sortingButtons.forEach(btn => { btn.disabled = false })
    barRange.disabled = false
    timeRange.disabled = false
  }, totalWaitTime += perCallWait)
}


/**
 * Enable all sorting buttons
 */
function setSpeedMinMax () {
  timeRange.max = maxDelay
  timeRange.min = minDelay
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
  barRangeValue.innerText = numBars
  barRange.value = numBars
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
  if (!elt) return
  window.setTimeout(() => {
    const width = parseInt(elt.style.width)
    setText(elt, width, height)
    elt.className = className
    if (!height) height = parseInt(elt.style.height)
    elt.setAttribute("style", `height: ${height}px; width: ${width}px;`)
  }, totalWaitTime += perCallWait)
}

export {
  updateElement,
  bars
}