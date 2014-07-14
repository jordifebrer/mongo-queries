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

// project: Hides a field
var cursor = db.books.aggregate(
  {
    $project: {
      title: 1,
      genre: 1,
      _id: 0
    }
  }
);
printjson(cursor.result);

// project: Changes the name of a field projecting type instead of genre
var cursor = db.books.aggregate(
  {
    $project: {
      title: 1,
      type: "$genre",
      _id: 0
    }
  }
);
printjson(cursor.result);

// concat: Adds a new field called one_line
var cursor = db.books.aggregate(
  {
    $project: {
      title: 1,
      type: "$genre",
      _id: 0,
      one_line: {
        $concat: ["title: ", "$title", ", genre: ", "$genre"]
      }
    }
  }
);
printjson(cursor.result);
