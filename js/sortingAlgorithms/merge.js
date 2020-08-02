import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement } from '../main'

/**
 * Call sort function and enable the buttons when finished
 * @param {Array} bars 
 * @param {Array} barSizes 
 */
const mergeSort = (bars, barSizes) => {
  sort(bars, barSizes, 0, barSizes.length - 1)
}

/**
 * Sorts the array using the merge sort algorithm
 * @param {Array} bars
 * @param {Array} barSizes
 * @param {Integer} left
 * @param {Integer} right
 * @return {Array}
 */
const sort = (bars, barSizes, left, right) => {
  if (left < right) {
    const middle = Math.floor((left  + right) / 2)
    updateElement(bars[middle], SELECTED, barSizes[middle])

    sort(bars, barSizes, left, middle)
    sort(bars, barSizes, middle+1, right)

    merge (bars, barSizes, left, middle, right)
  }
}

/**
 * Merge the array sections
 * @param {Array} bars
 * @param {Array} barSizes
 * @param {Integer} left 
 * @param {Integer} middle 
 * @param {Integer} right 
 */
const merge = (bars, barSizes, left, middle, right) => {
  let leftI = left
  let rightI = middle + 1

  const arr = []
  let currI = 0

  for(var i= left; i <= right; i++)
  {
      if(leftI > middle)
      {
          arr[currI++]=barSizes[rightI++];
          updateElement(bars[rightI-1], COMPARING, barSizes[rightI-1])
      }
      else if(rightI > right)
      {
          arr[currI++]=barSizes[leftI++];
          updateElement(bars[leftI-1], COMPARING, barSizes[leftI-1])
      }
      else if(barSizes[leftI] < barSizes[rightI])
      {
          arr[currI++]=barSizes[leftI++];
          updateElement(bars[leftI-1], COMPARING, barSizes[leftI-1])
      }
      else
      {
          arr[currI++]=barSizes[rightI++];
          updateElement(bars[rightI-1],COMPARING, barSizes[rightI-1])
      }
  }

  for(let i = 0; i < currI; i++)
  {
      barSizes[left++] = arr[i]
      updateElement(bars[left-1], SORTED, barSizes[left-1])
  }

}

export default mergeSort