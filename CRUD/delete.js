load("lib/helpers.js")


// Prints the stats of the current collection
printCounter('people')
printDocuments('people')

// remove: Removes all the documents with the name John
print("\ndb.people.remove({'name': 'John'}))");
db.people.remove({'name': 'John'});
printCounter('people')
printDocuments('people')

// justOne: Removes one document of the collection <justOne>: true
print("\nb.people.remove({}, true)");
db.people.remove({}, true);
printCounter('people')
printDocuments('people')

// isolated: Removes the documents blocking other write operations during the delete
print("\ndb.people.remove({'name': 'Juan', '$isolated': 1}))");
db.people.remove({'name': 'Juan', '$isolated': 1});
printCounter('people')
printDocuments('people')

// remove: Removes all the documents of the collection
print("\nb.people.remove()");
db.people.remove();
printCounter('people')


// Some commands to delete db/collections
// in mongo shell: Deletes a database
show dbs
use target_db
db.dropDatabase()

// in mongo shell: Deletes a collection
show collections
db.target_collection.drop()
