import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement, bars } from '../main'
import { swap } from './utils'

/**
 * Sorts the array using the heap sort algorithm
 * @param {Array} barSizes
 */
const heapSort = (barSizes) => { 
        let len = barSizes.length
  
        for (let i = Math.floor(len/2-1); i >= 0; i--) maxHeapify(barSizes, len, i)

        let i = len - 1
        while (i > 0) {
          swap (barSizes, 0, i)
          updateElement(bars[0], SORTED)
          updateElement(bars[i], SELECTED)

          maxHeapify(barSizes, i, 0)

          updateElement(bars[i], BASE)
          updateElement(bars[i], SORTED)
          i--
        }
        updateElement(bars[i], SORTED)
    }
  
/**
 * Create a max heap in array form
 * @param {Array} barSizes
 * @param {Integer} size
 * @param {Integer} index
 */
function maxHeapify (barSizes, size, index) { 
  let largest = index
  const left = (2 * index) + 1
  const right = (2 * index) + 2

  if (left < size && barSizes[left] > barSizes[largest]) {
    if (largest != index) updateElement(bars[largest], BASE)
    largest = left
    updateElement(bars[largest], COMPARING)
  }
  if (right < size && barSizes[right] > barSizes[largest]) {
    if (largest != index) updateElement(bars[largest], BASE)
    largest = right
    updateElement(bars[largest], COMPARING)
  }

  if (largest != index) {
    swap (barSizes, index, largest)
    maxHeapify(barSizes, size, largest)
  } 
} 

export default heapSort