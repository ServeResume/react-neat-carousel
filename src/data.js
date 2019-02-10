const colors = [
  'd32f2f',
  '7B1FA2',
  '303F9F',
  '0097A7',
  '388E3C',
  'FFA000',
  '5D4037'
]
const placeholderImage = 'https://via.placeholder.com/1600x900/FUCKYOU/0000FF'
const testData = Array(7)
  .fill({
    title: 'Some title',
    subTitle: 'skdhfusdfh'
  })
  .map((item, index) => ({
    ...item,
    id: Math.random(),
    index,
    imageURL: placeholderImage.replace('FUCKYOU', colors[index])
  }))

export const getInitialArray = data => {
  const array = [...data]
  mutableRotateRight(array)
  mutableRotateRight(array)
  return array
}

export function mutableRotateRight (arr) {
  arr.unshift(arr.pop())
  return arr
}

export function mutableRotateLeft (arr) {
  arr.push(arr.shift())
  return arr
}

export const getDataIndex = index => {
  // var rotationIndex = Math.floor(index / 5)
  var remainder = index % 5
  return remainder
}
export const getProperNumber = (number, length) =>
  number < 0 ? number + length : number % length

export default testData
