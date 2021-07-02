/*
In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.
You may return any answer,and it is guaranteed an answer exists.
 

Example 1:

Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:

Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]
*/

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    // sample input => [1,1,1,2,2,2]
    const result = []
    const hashMap = {} // { '1': 3, '2': 3 }

    for (let i = 0; i < barcodes.length; i++) {
        let barcode = barcodes[i]
        if (hashMap[barcode]) {
            hashMap[barcode]++
        } else {
            hashMap[barcode] = 1
        }
    }

    while (result.length !== barcodes.length) {
        for (let barcode in hashMap) {
            if (hashMap[barcode]) {
                hashMap[barcode]--
                result.push(parseInt(barcode))
            }
        }
    }
    console.log(hashMap)

    return result
}

console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]))
