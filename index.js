function hasTargetSum(arr, target) {
    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Check if the sum of the current pair equals the target
            if (arr[i] + arr[j] === target) {
                return true; // Found a pair with the target sum
            }
        }
    }
    // If no pair with the target sum is found, return false
    return false;
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
