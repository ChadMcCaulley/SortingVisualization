import bubble from "./sortingAlgorithms/bubble.js"

/**
 * Elements
 */
const arrayContainer = document.getElementById('array-container')
const randomizeButton = document.getElementById('randomize-button')
const bubbleButton = document.getElementById('bubble-button')

const numBars = 100


/**
 * State listener
 */
const state = {
  arrayInternal: [],
  arrayListener: function(val) {
    displayArray()
  },
  set array(val) {
    this.arrayInternal = val
    this.arrayListener(val)
  },
  get array() {
    return this.arrayInternal
  },
  registerListener: function(listener) {
    this.arrayListener = listener
  }
}

/**
 * Event Listeners
 */
randomizeButton.addEventListener("click", initializeArray)
bubbleButton.addEventListener("click", () => {
  bubble(state.array, displayArray)
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
 * Randomized array of integers
 */
function randomizeArray () {
  const array = []
  for (let i = 0; i < numBars; i++) {
    array.push(randomIntFromInterval(5, 800))
  }
  state.array = array
}

/**
 * Create the initial array
 */
function initializeArray () {
  randomizeArray()
  displayArray(true)
}

/**
 * Create the array
 * @param {Number} width
 */
function createArray (width) {
  arrayContainer.innerHTML = ''
  state.array.map((height, index) => {
    const newBar = document.createElement('div')
    newBar.className = 'array-bar'
    newBar.id = index
    newBar.setAttribute('style', `height: ${height}px; width: ${width}px;`)
    arrayContainer.appendChild(newBar)
  })
}


/**
 * Change the array
 * @param {Boolean} newArray
 */
function displayArray (newArray = false) {
  const width = Math.floor(window.innerWidth * 0.8 / numBars)
  if (state.array.length !== arrayContainer.childElementCount || newArray) return createArray(width)
  state.array.map((height, index) => {
    const bar = document.getElementById(index)
    bar.setAttribute('style', `height: ${height}px; width: ${width}px;`)
  })
}



window.onload = initializeArray()
window.addEventListener('resize', () => {
  displayArray()
})
