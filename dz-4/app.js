// 1

function reverseString(inputString) {
    return inputString.split('').reverse().join('')
}
let originalString = 'buy me Prada, Balenciaga';
let reversedString = reverseString(originalString);
console.log(reversedString) 







// 2

function calculateAverage(...numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    let sum = numbers.reduce((totals, num) => totals + num, 0)
    let average = sum / numbers.length
    return average;
}
  let result = calculateAverage(15, 25, 35, 45, 55, 65, 75);
  console.log(`Среднее арифметическое: ${result}`)







// 3

  let array = ["name", "John", "lastname", "Black", "age", "23"];
  let resultObject = {} 
  for (let i = 0; i < array.length; i += 2) {
    let keys = array[i]
    let value = array[i + 1]
    resultObject[keys] = value;
}
  console.log(resultObject)






// 4

  let dataList = [
    1, 2, undefined, null, "a", 3, 4, undefined,
    null, null, 5, "b", "c", undefined, 'd'
  ]
  let sortedArraysType = {};
  
  for (let value of dataList) {
    let type = typeof value;
    if (!sortedArraysType[type]) {
      sortedArraysType[type] = [];
    }
    sortedArraysType[type].push(value);
  }
  let sortedArrays = Object.values(sortedArraysType)
    .sort((a, b) => a.length - b.length)
  console.log(sortedArrays)
  










