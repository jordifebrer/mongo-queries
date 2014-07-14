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

// limit: Displays first n results of the results. In this example the 10 first
var cursor = db.books.aggregate(
  {
    $limit: 10
  }
);
printjson(cursor.result);
