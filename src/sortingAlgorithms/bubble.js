/**
 * Sorts the array using the bubble sort algorithm
 * @param {Array} inputArr
 * @return {Array}
 */
const bubble = (inputArr) => {
  const arr = inputArr.map(v => v)
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