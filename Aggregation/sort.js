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

// sort: Sorts the documents by a specified field/s.
var cursor = db.books.aggregate(
  {
    $sort: {
      genre: 1,
      _id: -1,
    }
  }
);
printjson(cursor.result);
