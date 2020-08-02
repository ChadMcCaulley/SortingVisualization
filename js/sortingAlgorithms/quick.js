import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement, bars } from '../main'
import { swap } from './utils'

function quickSort (barSizes) {
  sort (barSizes, 0, barSizes.length - 1)
}

function partition (barSizes, low, high) { 
  const pivot = barSizes[low]
  let i = low + 1
  updateElement(bars[pivot], SELECTED)

  for (let j = low + 1; j <= high; j++) { 
    if (barSizes[j] < pivot) {
      updateElement(bars[j], SELECTED)
      swap(barSizes, i, j)
      i++
    }
  }

  swap(barSizes, low, i-1)

  for (let k = low ; k <= i; k++) updateElement(bars[k], SORTED)

  return i-1
}

function sort (barSizes, low, high) {
  if (low < high) {
    const pivot = partition(barSizes, low, high); 
    sort(barSizes, low, pivot-1); 
    sort(barSizes, pivot+1, high); 
  } 
}

export default quickSort