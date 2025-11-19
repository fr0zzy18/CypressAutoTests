function summArr(arr){
    let sum = 0
    for (let num of arr) {
        sum += num
        if (num === 0) break
    }
    return sum
}    
const mass = [24, 3, 6, 7, 87, 45, 43, 3, 0, 21, 324, 1000]
console.log(summArr(mass))
console.log('done')
