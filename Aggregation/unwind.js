load("lib/helpers.js")


if (db['books'].count() == 0) {
    // Creates 25 books with a serial _id, title and a random genre
    for (var i=0; i < 25; i++) {
        var book = {
            "_id": i,
            "title": "book" + i,
            "genre": bookGenres[ Math.floor((Math.random() * 5)) ]
        }
        db.books.insert(book);
    }
}

// unwind: Turns the book array into separate documents
var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      books: {$push: "$title"}
    }
  },
  {
    $unwind: "$books"
  }
);
printjson(cursor.result);
