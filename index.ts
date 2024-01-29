/**
 * Adds an element to the end of an array.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to which the element will be added.
 * @param {T} element - The element to add.
 * @returns {T[]} - A new array with the added element.
 */
export const push = <T>(array: T[], element: T): T[] => {
  return [...array, element]
}

/**
 * Updates an object at a specific index in an array.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array containing the object to update.
 * @param {number} index - The index of the object to update.
 * @param {T} object - The new object to replace the existing one.
 * @returns {T[]} - A new array with the updated object.
 */
export const updateObjectAtIndex = <T>(array: T[], index: number, object: T): T[] => {
  return array.map((item, currentIndex) => currentIndex === index ? object : item)
}

/**
 * Removes an element at a specific index from an array.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array from which the element will be removed.
 * @param {number} index - The index of the element to remove.
 * @returns {T[]} - A new array with the element removed.
 */
export const removeAtIndex = <T>(array: T[], index: number): T[] => {
  return array.filter((_, currentIndex) => currentIndex !== index)
}

/**
 * Updates a specific field in an object at a given index in an array.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array containing the object to update.
 * @param {number} index - The index of the object to update.
 * @param {keyof T} field - The field to update in the object.
 * @param {T[keyof T]} value - The new value for the field.
 * @returns {T[]} - A new array with the updated object.
 */
export const updateFieldInObject = <T>(array: T[], index: number, field: keyof T, value: T[keyof T]) => {
  return array.map((obj, currentIndex) => currentIndex === index ? { ...obj, [field]: value } : obj)
}

/**
 * Updates a specific field in all objects in an array.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array containing the objects to update.
 * @param {keyof T} field - The field to update in each object.
 * @param {T[keyof T]} value - The new value for the field.
 * @returns {T[]} - A new array with all objects updated.
 */
export const updateFieldInAllObjects = <T>(array: T[], field: keyof T, value: T[keyof T]): T[] => {
  return array.map(obj => ({ ...obj, [field]: value }))
}

/**
 * Finds an object in an array by matching a specific key and value.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to search for the object.
 * @param {keyof T} key - The key to match in the objects.
 * @param {T[keyof T]} value - The value to match with the key.
 * @returns {T | undefined} - The found object or undefined if not found.
 */
export const findObjectByKey = <T>(array: T[], key: keyof T, value: T[keyof T]): T | undefined => {
  return array.find(obj => obj[key] === value)
}

/**
 * Sorts an array of objects based on a specific key.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to sort.
 * @param {keyof T} key - The key to use for sorting.
 * @param {boolean} [ascending=true] - Determines the sorting order (default is ascending).
 * @returns {T[]} - A new array with objects sorted based on the specified key.
 */
export const sortByKey = <T>(array: T[], key: keyof T, ascending: boolean = true): T[] => {
  return [...array].sort((a, b) => (a[key] > b[key] ? 1 : -1) * (ascending ? 1 : -1))
}

export default {
  push,
  updateObjectAtIndex,
  removeAtIndex,
  updateFieldInObject,
  updateFieldInAllObjects,
  findObjectByKey,
  sortByKey
}
