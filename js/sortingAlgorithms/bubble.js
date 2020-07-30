/**
 * Sorts the array using the bubble sort algorithm
 * @param {Array} arr
 * @return {Array}
 */
const bubble = (arr) => {
  const len = arr.length - 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

export default bubble