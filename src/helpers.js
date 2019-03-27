function mutableRotateRight(arr) {
  arr.unshift(arr.pop());
  return arr;
}

function mutableRotateLeft(arr) {
  arr.push(arr.shift());
  return arr;
}

export const moveData = (direction, data) =>
  direction ? mutableRotateLeft(data) : mutableRotateRight(data);

export function getInitialArray(data) {
  const array = [...data];
  mutableRotateRight(array);
  mutableRotateRight(array);
  return array;
}

export const getProperNumber = (number, length) =>
  number < 0 ? number + length : number % length;

export const getProperElements = dataArray =>
  new Array(5)
    .fill()
    .map((_, index) => dataArray[getProperNumber(index, dataArray.length)]);
