/**
 * Script to create and insert a bunch of books
 */

var bookGenres = [
    'comic',
    'crime',
    'horror',
    'poetry',
    'science fiction'
];

var books = [];

for (var i = 0; i < 50; i++) {
  books.push({
    "genre": bookGenres[ Math.floor(Math.random() * 5) ],
    "date": new Date(),
    "price": Math.ceil(Math.random() * 40)
  });
}

db.books.insert(books);
