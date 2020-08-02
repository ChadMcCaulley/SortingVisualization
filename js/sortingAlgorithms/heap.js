import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement } from '../main'

/**
 * Swap two elements in an array by their index
 * @param {Array} arr 
 * @param {Integer} i 
 * @param {Integer} j
 * @param {Array} bars
 */
const swap = (arr, i, j, bars) => {
  updateElement(bars[i], COMPARING)
  updateElement(bars[j], COMPARING)

  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp

  updateElement(bars[i], COMPARING, arr[i])
  updateElement(bars[j], COMPARING, arr[j])

  updateElement(bars[i], BASE)
  updateElement(bars[j], BASE)
}

/**
 * Sorts the array using the heap sort algorithm
 * @param {Array} bars
 * @param {Array} barSizes
 */
const heapSort = (bars, barSizes) => { 
        let len = barSizes.length
  
        for (let i = Math.floor(len/2-1); i >= 0; i--) maxHeapify(barSizes, len, i, bars)

        let i = len - 1
        while (i > 0) {
          swap (barSizes, 0, i, bars)
          updateElement(bars[0], SORTED)
          updateElement(bars[i], SELECTED)

          maxHeapify(barSizes, i, 0, bars)

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
 * @param {Array} bars
 */
function maxHeapify (barSizes, size, index, bars) { 
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
    swap (barSizes, index, largest, bars)
    maxHeapify(barSizes, size, largest, bars)
  } 
} 

export default heapSort