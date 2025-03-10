const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable called totalBatteries which is the sum of all battery amounts
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);

// Alternative one-liner solution:
// const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// For testing/verification
console.log(totalBatteries); // Should output 31