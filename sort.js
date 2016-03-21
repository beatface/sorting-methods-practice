'use strict'

const chalk = require('chalk')
const util = require('util')

const arr1 = [6,5,3,1,8,7,2,4]
const arr2 = [6,5,3,1,8,7,2,4]
const arr3 = [6,5,3,1,8,7,2,4,0]


function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        console.log(chalk.red(util.inspect(array)))
      }
      console.log(chalk.dim(util.inspect(array)))
    }
  }

  return array
}

function insertionSort (array) {
    for (let j = 1; j < array.length; j++) {
        for (let i = j + 1; i >= 0; i--) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1)
                console.log(chalk.red(util.inspect(array)))
            }
        }
        console.log(chalk.dim(util.inspect(array)))
    }
    return array
}

function selectionSort (array) {
    let i,j;
    for (j = 0; j < array.length - 1; j++) {
        console.log(chalk.red(util.inspect(array)))
        let minimum = j;
        for ( i = j+1; i < array.length; i++) {
            if (array[i] < array[minimum]) {
                minimum = i;
            }
        }

        if(minimum != j) {
            swap(array, j, minimum);
        }
    }
    return array
}

console.log('start', arr1)
console.log('bubbled', bubbleSort(arr1))
console.log('start', arr2)
console.log('inserted', insertionSort(arr2))
console.log('start', arr3)
console.log('selected', selectionSort(arr3))
