export const push = <T>(array: T[], element: T): T[] => {
  return [...array, element]
}

export const updateObjectAtIndex = <T>(array: T[], index: number, object: T): T[] => {
  return array.map((item, currentIndex) => currentIndex === index ? object : item)
}

export const removeAtIndex = <T>(array: T[], index: number): T[] => {
  return array.filter((_, currentIndex) => currentIndex !== index)
}

export const updateFieldInObject = <T>(array: T[], index: number, field: keyof T, value: T[keyof T]) => {
  return array.map((obj, currentIndex) => currentIndex === index ? { ...obj, [field]: value } : obj)
}

export const updateFieldInAllObjects = <T>(array: T[], field: keyof T, value: T[keyof T]): T[] => {
  return array.map(obj => ({ ...obj, [field]: value }))
}

export const findObjectByKey = <T>(array: T[], key: keyof T, value: T[keyof T]): T | undefined => {
  return array.find(obj => obj[key] === value)
}

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
