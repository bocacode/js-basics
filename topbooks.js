const books = [{ 
  name: 'Clean Code',
  rating: 4.6,
}, {
  name: 'JavaScript for Dummies',
  rating: 3.8,
}, {
  name: 'Weapons of Math Destruction',
  rating: 4.9,
}, {
  name: 'How not to code',
  rating: 4.1,
}]

function returnTopBooks(books) {
  const topBooks = books.filter(book => {
    return book.rating >= 4.25
  })
  return topBooks
}

function returnTopBooksLongWay(books) {
  const howManyBooks = books.length
  let topBooks = []
  for(let i = 0; i < howManyBooks; i++) {
    if(books[i].rating >= 4.25){
      topBooks.push(books[i])
    }
  }
  return topBooks
}

console.log(returnTopBooks(books))
console.log(returnTopBooksLongWay(books))
