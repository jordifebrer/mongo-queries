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

// group: Groups the book collection by genre adding the titles into the
//  array books. $push pushes duplicates / addToSet pushes unique values
var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      books: {$push: "$title"}
    }
  }
);
printjson(cursor.result);

// sum: Groups the book collection by genre and counts the number of books by
//  genre the titles into the
var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      books: {$sum: 1}
    }
  }
);
printjson(cursor.result);

// first: Groups the book collection by genre returning the first value of every
//  set of genres. $last is the reverese function
var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      books: {$first: "$title"}
    }
  }
);
printjson(cursor.result);

// max: Groups the book collection by genre returning the max value of every
//  set of genres. $min is the reverse function
var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      books: {$max: "$title"}
    }
  }
);
printjson(cursor.result);
