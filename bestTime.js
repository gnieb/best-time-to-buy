function bestTimeForStock (arr) {
    let profit = 0
    
    while (arr.length > 1) {
        if (  Math.max(arr[1], arr[arr.length - 1]) - arr[0] > profit ) {
            profit =  Math.max(arr[1], arr[arr.length - 1]) - arr[0]
            arr = arr.slice(1)
            console.log(arr)
        } else {
            arr = arr.slice(1)
            console.log("no profit this time", arr)
        }
    }
console.log(profit,arr)
    return profit
    

} 

if (require.main == module) {

    console.log("Expecting: 6")
    console.log("=>", bestTimeForStock([3,4,2,1,7]))
}

module.exports = bestTimeForStock;

//  take the max difference between the arr[positionX] and the maximumof the other 
// integers
// go to mthe next position. if greater than the profit before, replace the profit value with the difference and keep moving


