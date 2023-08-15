// dz 1
var arrayNums = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newArray = []
 for (var i = 0;  i < arrayNums.length; i++) {
    var num = String(arrayNums[i])
    var firstValue = num[0]
   if(firstValue === '2' || firstValue === '5') {
   newArray.push(num);
   }
}
console.log(newArray);


// dz 3

function countTags(tagList) {
  const tagCounts = {}
  for (const tag of tagList) {
    if (tagCounts[tag]) {
      tagCounts[tag]++
    } else {
      tagCounts[tag] = 1
    }
  }
  return tagCounts
}
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
const tagCounts = countTags(tags)
console.log(tagCounts)


// dz 2

function getDataType(value) {
  return typeof value
}
console.log(getDataType({}))         
console.log(getDataType())
console.log(getDataType(0))








