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

// match: Filters the results displaying the books with genre: comic
var cursor = db.books.aggregate(
  {
    $match: {
      genre: "comic"
    }
  }
);
printjson(cursor.result);

// match: Filters the results displaying the books with genre: comic and _id
//  lower than 15
var cursor = db.books.aggregate(
  {
    $match: {
      genre: "comic",
      _id: {$lt: 15}
    }
  }
);
printjson(cursor.result);
