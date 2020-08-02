import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement } from '../main'

/**
 * Sorts the array using the heap sort algorithm
 * @param {Array} bars
 * @param {Array} barSizes
 */
const heapSort = (bars, barSizes) => { 
        let len = barSizes.length 
  
        for (let i = Math.floor(len/2-1); i >= 0; i--) 
            heapify(barSizes, len, i); 
  
        for (let i = len-1; i > 0; i--) { 
            const temp = barSizes[0]; 
            barSizes[0] = barSizes[i]; 
            barSizes[i] = temp; 
  
            heapify(barSizes, i, 0); 
        } 
    }
  
/**
 * Create a max heap
 * @param {Array} arr
 * @param {Integer} size
 * @param {Integer} index
 */
function heapify (arr, size, index) { 
  let largest = index
  const left = (2 * index) + 1
  const right = (2 * index) + 2

  if (left < size && arr[left] > arr[largest]) largest = left
  if (right < size && arr[right] > arr[largest]) largest = right

  if (largest != index) { 
      const temp = arr[index]
      arr[index] = arr[largest]
      arr[largest] = temp
      heapify(arr, size, largest)
  } 
} 

export default heapSort