const fruits = [{
  name: 'apple',
  qty: 12,
  price: 2.49
}, {
  name: 'banana',
  qty: 12,
  price: 2.49
},{
  name: 'orange',
  qty: 12,
  price: 2.49
}]

let myArray = ['Adrian', 'Kevin', 'Cesar']

console.log(myArray[2])

function getFruitColor(fruit){
  switch (fruit.name) {
    case 'apple':
    case 'strawberry':
      return 'red'
    case 'banana':
    case 'lemon':
      return 'yellow'
    case 'pear':
    case 'lime':
      return 'green'
    case 'mango':
    case 'orange':
      return 'orange'
    default:
      return 'unknown'
  }
}

fruits[1].color = getFruitColor(fruits[1])

console.log(fruits)

