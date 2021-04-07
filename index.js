const salesTaxRate = 0.07

function calcSalesTax(taxRate, subtotal) {
  const taxTotal = taxRate * subtotal
  return taxTotal
}

const customerSubtotal = 20.00
const customerSalesTax = calcSalesTax(salesTaxRate, customerSubtotal)
const customerTotal = customerSubtotal + customerSalesTax

console.log(`Subtotal:    ${customerSubtotal.toFixed(2)}`)
console.log(`Sales Tax:    ${customerSalesTax.toFixed(2)}`)
console.log('-------------------')
console.log(`Total:       ${customerTotal.toFixed(2)}`)

