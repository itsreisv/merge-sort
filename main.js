function mergeSortRec(array) {
  if(array.length === 0) return "Please enter a valid array"
  if(array.length === 1) return array;

  const splitArray = Math.floor(array.length / 2);
  const leftArray = array.slice(0, splitArray);
  const rightArray = array.slice(splitArray, array.length);

  return merge(mergeSortRec(leftArray), mergeSortRec(rightArray));

}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while ( leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex])
      leftIndex++
    } else {
      result.push(rightArray[rightIndex])
      rightIndex++
    }
  }
  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex])
    leftIndex++
  }
  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex])
    rightIndex++
  }
return result;
}