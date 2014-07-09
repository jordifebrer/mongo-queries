load("lib/helpers.js")


// Prints the stats of the current collection
printCounter('people')
printDocuments('people')

// set: Changes two different fields keeping the rest of the values
print("\ndb.people.update({age: 25},{'$set': {age: 15, name: 'Jonathan'}})");
db.people.update({age: 25},{'$set': {age: 15, name: 'Jonathan'}});
printCounter('people')
printDocuments('people')

// inc: Increments the field age keeping the rest of the values
print("\ndb.people.update({age: 15},{'$inc': {age: 1}})");
db.people.update({age: 15},{'$inc': {age: 1}});
printCounter('people')
printDocuments('people')

// unset: Deletes the field hobbies keeping the rest of the values
print("\ndb.people.update({age: 16},{'$unset': {hobbies: 1}})");
db.people.update({age: 16},{'$unset': {hobbies: 1}});
printCounter('people')
printDocuments('people')

// set: Adds the new fields hobbies and pets to the document
print("\ndb.people.update({name: 'Jonathan'},{'$set': {hobbies: ['origami, hiking'], pets: ['cat']}});");
db.people.update({name: 'Jonathan'},{'$set': {hobbies: ['origami', 'hiking'], pets: ['cat']}});
printCounter('people')
printDocuments('people')

// push: Adds values at the final of the array
print("\ndb.people.update({name: 'Jonathan'},{'$push': {hobbies: 'sailing', films: 'Bladde Runner'}}");
db.people.update({name: 'Jonathan'},{'$push': {hobbies: 'sailing', films: 'Bladde Runner'}});
printCounter('people')
printDocuments('people')

// addToSet: Adds values at the final of the array only if there are unique
print("\ndb.people.update({name: 'Jonathan'},{'$addToSet': {films: 'Bladde Runner'}})");
db.people.update({name: 'Jonathan'},{'$addToSet': {films: 'Bladde Runner'}});
printCounter('people')
printDocuments('people')

// pop: Deletes the last element of the array hobbies
print("\ndb.people.update({name: 'Jonathan'},{'$pop': {'hobbies': 1}})");
db.people.update({name: 'Jonathan'},{'$pop': {'hobbies': 1}});
printCounter('people')
printDocuments('people')

// pop: Deletes the first element of the array hobbies
print("\ndb.people.update({name: 'Jonathan'},{'$pop': {'hobbies': -1}})");
db.people.update({name: 'Jonathan'},{'$pop': {'hobbies': -1}});
printCounter('people')
printDocuments('people')

//insert: Inserts a new document
print("\ndb.people.insert({_id: 1, name: 'Michael', age: 35}, true)");
db.people.insert({_id: 1, name: 'Michael', age: 35}, true);
printCounter('people')
printDocuments('people')

//upsert: Updates the document or creates a new one if it doesn't exists
print("\ndb.people.update({_id: 1, name: 'Michael'},{age: 35}, true)");
db.people.update({_id: 1, name: 'Michael'},{age: 55}, true);
printCounter('people')
printDocuments('people')

//save: Similar as above. Update the document or creates a new one if it 
// doesn't exists
print("\ndb.people.save({_id: 1, age: 45, name: 'Michelangelo'})");
db.people.save({_id: 1, age: 45, name: 'Michelangelo'});
printCounter('people')
printDocuments('people')

// set: Updates all the documents which age is 45 without inserting a new one
//  if the query doesn't match
print("\ndb.people.update({age: 45},{'$set': {'ok': true}}, false, true)");
db.people.update({age: 45},{'$set': {'ok': true}}, false, true);
printCounter('people')
printDocuments('people')
