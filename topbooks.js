function returnTopBooks(books) {
  const topBooks = books.filter(book => {
    return book.rating >= 4.25
  })
  return topBooks
}

function returnTopBooksLongWay(books) {
  let topBooks = []
  for (let i = 0; i < books.length; i++) {
    if(books[i].rating >= 4.25) {
      topBooks.push(books[i])
    }
  }
  return topBooks
}