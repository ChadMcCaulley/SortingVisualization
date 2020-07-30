/**
 * Sorts the array using the bubble sort algorithm
 * @param {Array} arr
 * @return {Array}
 */
const bubble = (arr) => {
  const len = arr.length - 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-i; j++) {
      const comp1 = document.getElementById(j)
      const comp2 = document.getElementById(j+1)
      comp1.classList.add('comparing')
      comp2.classList.add('comparing')
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
}

export default bubble