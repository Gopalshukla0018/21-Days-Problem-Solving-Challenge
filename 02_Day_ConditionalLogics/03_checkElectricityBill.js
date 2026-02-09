//     Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit

function calculateElectricityBill(units) {
  let bill = 0;
  if (units <= 100) {
    bill = units * 5;
  } else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }
  return bill;
}
console.log("Total Bill = ₹" + calculateElectricityBill(230)); // Total Bill = ₹1500
console.log("Total Bill = ₹" + calculateElectricityBill(50)); // Total Bill = ₹250

