/**
 * Script that uses the aggregation framework and
 * updates the results collection
 */

/*
var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      //avg_price: {$avg: "$price"},
      total_amount: {$sum: "$price"}
    }
  },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      total_amount: 1
    }
  }
);
printjson(cursor.result);
*/

var cursor = db.books.aggregate(
  {
    $group: {
      _id: "$genre",
      //avg_price: {$avg: "$price"},
      num_books: {$sum: 1}
    }
  },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      num_books: 1
    }
  }
);
printjson(cursor.result);

var results = cursor.result;

var obj = {
  _id: 'sales'
}

for (var i = 0; i < results.length; i++) {
  obj[results[i].genre] = results[i].num_books
}

printjson(obj);

db.results.save(obj);
