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

// skip: Avoids first n results of the results. Skips the first result
var cursor = db.books.aggregate(
  {
    $skip: 1
  }
);
printjson(cursor.result);

// limit: Avoids the first document and limit de output to one document 
//  the second document of the resultset
var cursor = db.books.aggregate(
  {
    $skip: 1
  },
  {
    $limit: 1
  }
);
printjson(cursor.result);
