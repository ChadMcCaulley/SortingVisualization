import bubble from "./sortingAlgorithms/bubble.js"

const arrayContainer = document.getElementById('array-container')
const randomizeButton = document.getElementById('randomize-button')
randomizeButton.addEventListener("click", randomizeArray)

const state = {
  arrayInternal: [],
  arrayListener: function(val) {},
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

state.registerListener((val) => {
  displayArray()
});


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
  for (let i = 0; i < 200; i++) {
    array.push(randomIntFromInterval(5, 800))
  }
  state.array = array
}

/**
 * Create the initial array
 */
function initializeArray () {
  randomizeArray()
  displayArray()
}

/**
 * Display the array
 */
function displayArray () {
  arrayContainer.innerHTML = ''
  state.array.map(height => {
    const newBar = document.createElement('div')
    newBar.className = "array-bar"
    newBar.setAttribute('style', `height: ${height}px`)
    arrayContainer.appendChild(newBar)
  })
}

window.onload = initializeArray()
