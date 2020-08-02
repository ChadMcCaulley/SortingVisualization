import { SELECTED, COMPARING, SORTED, BASE } from './classNames'
import { updateElement, bars } from '../main'

/**
 * Swap two elements in an array by their index
 * @param {Array} arr 
 * @param {Integer} i 
 * @param {Integer} j
 */
const swap = (arr, i, j) => {
  updateElement(bars[i], COMPARING)
  updateElement(bars[j], COMPARING)

  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp

  updateElement(bars[i], COMPARING, arr[i])
  updateElement(bars[j], COMPARING, arr[j])

  updateElement(bars[i], BASE, arr[i])
  updateElement(bars[j], BASE, arr[j])
}

export {
  swap
}