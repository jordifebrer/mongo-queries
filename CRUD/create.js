load("lib/helpers.js")


// Prints the stats of the current collection
printCounter('people')
printDocuments('people')

// Removes all the documents of the people collection
db.people.remove();

var person = {
  "name": "John",
  "surname": "Smith",
  "age": 40
}

// insert: Inserts a new document to the people collection
print("\ndb.people.insert(person)");
db.people.insert(person);
printCounter('people')
printDocuments('people')

// insert: Inserts the same document as above, but with different _id
print("\ndb.people.insert(person)");
db.people.insert(person);
printCounter('people')
printDocuments('people')

// insert: Inserts a new document to the people collection
print("\ndb.people.insert({})");
db.people.insert({});
printCounter('people')
printDocuments('people')

// insert: Inserts three new documents with the same _id, only the first will 
//  be inserted because the _id must be unique
print("\ndb.people.insert({})");
db.people.insert({_id: 1});
db.people.insert({_id: 1});
db.people.insert({_id: 1});
printCounter('people')
printDocuments('people')

// insert: Inserts three new documents to the people collection
print("\ndb.people.insert([{_id: 95}, {_id: 96}, {_id: 97}])");
db.people.insert([{_id: 95}, {_id: 96}, {_id: 97}]);
printCounter('people')
printDocuments('people')

// update: Inserts a new documents using update if there isn´t a document
//  with _id: 98
print("\ndb.people.update({_id: 98},{age: 31},true) or using the next query:");
print("db.people.update({_id: 98},{age: 31},{upsert: true})");
db.people.update({_id: 98},{age: 31},{upsert: true});
printCounter('people')
printDocuments('people')

// save: Inserts a new documents using save if there isn´t a document
//  with _id: 99
print("\ndb.people.save({_id: 99, age: 35})");
db.people.save({_id: 99, age: 35});
printCounter('people')
printDocuments('people')


// Some commands to copy db/collections
// in bash terminal: Can copy a collection from  different databases
mongoexport -d origin_db -c origin_collection | mongoimport -d target_db -c target_collection --drop

// in bash terminal: Can copy a collection from  different databases
mongodump -d origin_db -c origin_collection
mongorestore -d target_db -c target_collection dump/origin_collection.bson

// in mongo shell: Copies a collection
db.origin_collection.copyTo('target_collection')

// in mongo shell: Copies a database
db.copyDatabase('origin_db', 'target_db')
