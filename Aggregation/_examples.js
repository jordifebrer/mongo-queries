var cursor = db.books.aggregate(
  {
    $match: {
      genre: {$in: ['poetry', 'comic']}
    }
  },
  {
    $group: {
      _id: "$genre",
      books: {$push: "$title"}
    }
  },
  {
    $project: {
      _id: 0,
      genress: "$_id",
      books: 1
    }
  },
  {
    $sort: {
      "genress": -1
    }
  },
  {
    $unwind: "$books"
  }
);
printjson(cursor.result);

var cursor = db.books.aggregate(
  {
    $group: {
      _id: {"genre": "$genre", "price": "$price"},
      //books: {$first: "$title"},
      sum: {$sum: "$price"},
      avg: {$avg: "$price"}
    }
  },
  {
    $project: {
      _id: 0,
      groupBy: "$_id",
      //first_book: "$books",
      total_amount: "$sum",
      avg_amount: "$avg"
    }
  }
);
printjson(cursor.result);

var cursor = db.books.aggregate(
  {
    $match: {
      genre: 'poetry'
    }
  },
  {
    $group: {
      _id: {"genre": "$genre", "price": "$price"},
      //books: {$first: "$title"},
      sum: {$sum: "$price"},
      avg: {$avg: "$price"}
    }
  },
  {
    $project: {
      _id: 0,
      groupBy: "$_id",
      //first_book: "$books",
      total_amount: "$sum",
      avg_amount: "$avg",
      groupByGenre: {$toUpper: "$_id.genre"}
    }
  },
  {
    $sort: {
      "groupBy.genre": 1, "total_amount": -1
    }
  },
  {
    $limit: 2
  }
);
printjson(cursor.result);

/*
{ "_id" : 0, "title" : "book0", "genre" : "science fiction" }
{ "_id" : 1, "title" : "book1", "genre" : "poetry" }
{ "_id" : 2, "title" : "book2", "genre" : "science fiction" }
{ "_id" : 3, "title" : "book3", "genre" : "comic" }
{ "_id" : 4, "title" : "book4", "genre" : "crime" }
{ "_id" : 5, "title" : "book5", "genre" : "science fiction" }
{ "_id" : 6, "title" : "book6", "genre" : "crime" }
{ "_id" : 7, "title" : "book7", "genre" : "crime" }
*/
