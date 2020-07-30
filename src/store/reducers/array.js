import { bubble } from '../../sortingAlgorithms'

/**
 * Get a random integer from a given range
 * @param {Number} min 
 * @param {Number} max 
 */
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Randomize the integer in state
 * @return {Array}
 */
const randomizeArray = () => {
  const array = []
  for (let i = 0; i < 200; i++) {
    array.push(randomIntFromInterval(5, 800))
  }
  return array
}


export default function (state = randomizeArray(), action) {
  switch (action.type) {
    case 'BUBBLE':
      return bubble(state)
    case 'RANDOMIZE':
      return randomizeArray()
    default:
      return state
  }
}