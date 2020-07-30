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
      arr[j].comparing = true
      arr[j+1].comparing = true
      if (arr[j].height > arr[j+1].height) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      arr[j].comparing = false
      arr[j+1].comparing = false
    }
  }
  return arr
}

export default bubble