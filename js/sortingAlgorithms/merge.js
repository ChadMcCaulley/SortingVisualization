import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement } from '../main'

/**
 * Sorts the array using the merge sort algorithm
 * @param {Array} bars
 * @param {Array} heights
 * @param {Integer} left
 * @param {Integer} right
 * @return {Array}
 */
const mergeSort = (bars, heights, left, right) => {
  if (left < right) {
    const middle = Math.floor((left  + right) / 2)
    updateElement(bars[middle], SELECTED, heights[middle])

    mergeSort(bars, heights, left, middle)
    mergeSort(bars, heights, middle+1, right)

    merge (bars, heights, left, middle, right)
  }
}

/**
 * Merge the array sections
 * @param {Array} bars
 * @param {Array} heights
 * @param {Integer} left 
 * @param {Integer} middle 
 * @param {Integer} right 
 */
const merge = (bars, heights, left, middle, right) => {
  let leftI = left
  let rightI = middle + 1

  const arr = []
  let currI = 0

  for(var i= left; i <= right; i++)
  {
      if(leftI > middle)
      {
          arr[currI++]=heights[rightI++];
          updateElement(bars[rightI-1], COMPARING, heights[rightI-1])
      }
      else if(rightI > right)
      {
          arr[currI++]=heights[leftI++];
          updateElement(bars[leftI-1], COMPARING, heights[leftI-1])
      }
      else if(heights[leftI] < heights[rightI])
      {
          arr[currI++]=heights[leftI++];
          updateElement(bars[leftI-1], COMPARING, heights[leftI-1])
      }
      else
      {
          arr[currI++]=heights[rightI++];
          updateElement(bars[rightI-1],COMPARING, heights[rightI-1])
      }
  }

  for(let i = 0; i < currI; i++)
  {
      heights[left++] = arr[i]
      updateElement(bars[left-1], SORTED, heights[left-1])
  }

}

export default mergeSort