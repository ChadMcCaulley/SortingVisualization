import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement } from '../main'

/**
 * Sorts the array using the bubble sort algorithm
 * @param {Array} bars
 * @param {Array} heights
 * @return {Array}
 */
const bubble = (bars, heights) => {
  const len = bars.length - 1
  for (let i = 0; i < len; i++) {
    for (var j = 0; j < len-i; j++) {
      updateElement(bars[j], SELECTED)
      if (heights[j] > heights[j+1]) {
        updateElement(bars[j], COMPARING)
        updateElement(bars[j+1], COMPARING)

        const temp = heights[j]
        heights[j] = heights[j+1]
        heights[j+1] = temp

        updateElement(bars[j], COMPARING, heights[j])
        updateElement(bars[j+1], COMPARING, heights[j+1])
      }
      updateElement(bars[j], BASE)
    }
    updateElement(bars[j], SORTED)
  }
  updateElement(bars[0], SORTED)
}

export default bubble