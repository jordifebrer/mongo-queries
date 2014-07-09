// find: Retrieves all the people/documents
print("\ndb.people.find()");
cursor = db.people.find();
while(cursor.hasNext()){
    printjson(cursor.next());
}

// find: Retrieves documents with name 'John'
print("\ndb.people.find({name: 'John'})");
cursor = db.people.find({name: 'John'});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// regex: Retrieves documents whose name starts with 'J'
print("\ndb.people.find({name: {$regex: /^J/}}");
cursor = db.people.find({name: {$regex: /^J/}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// and: Retrieves documents whose name starts with 'J' and surname 'S'
print("\ndb.people.find({$and: [{name: {$regex: /^J/}}, {surname: {$regex: /^S/}}]}");
cursor = db.people.find({$and: [{name: {$regex: /^J/}}, {surname: {$regex: /^S/}}]});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// or: Retrieves documents whose name starts with 'J' or surname with 'D'
print("\ndb.people.find({$or: [{name: {$regex: /^J/}}, {surname: {$regex: /^D/}}]}");
cursor = db.people.find({$or: [{name: {$regex: /^J/}}, {surname: {$regex: /^D/}}]});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// not: Retrieves documents whose surname not starts with 'D'
print("\ndb.people.find({surname: {$not: /^D/}}");
cursor = db.people.find({surname: {$not: /^D/}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// ne: Retrieves documents with surname not equal to 'Doe'
print("\ndb.people.find({surname: {$ne: 'Doe'}}");
cursor = db.people.find({surname: {$ne: 'Doe'}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// exists: Retrieves documents without the field hobbies
print("\ndb.people.find({hobbies: {$exists: false}}");
cursor = db.people.find({hobbies: {$exists: false}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// in: Retrieves documents with surname in the list ['Smith', 'Dupont']
print("\ndb.people.find({surname: {'$in': ['Smith', 'Dupont']}})");
cursor = db.people.find({surname: {'$in': ['Smith', 'Dupont']}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// nin: Retrieves documents with surname not in the list ['Smith', 'Doe']
print("\ndb.people.find({surname: {'$nin': ['Smith', 'Doe']}})");
cursor = db.people.find({surname: {'$nin': ['Smith', 'Doe']}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// all: Retrieves documents with all the requested elements of the array
print("\ndb.people.find({hobbies: {'$all': ['origami', 'running']}})");
cursor = db.people.find({hobbies: {'$all': ['origami', 'running']}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// findOne: Retrieves only one document
print("\ndb.people.findOne()");
value = db.people.findOne();
printjson(value);

// findOne: Retrieves one document hidding the _id
print("\ndb.people.findOne({}, {'_id': 0}");
value = db.people.findOne({}, {'_id': 0});
printjson(value);

// findOne: Same as above
print("\ndb.people.findOne({}, {'_id': false}");
value = db.people.findOne({}, {'_id': false});
printjson(value);

// findOne: Retrieves one document showing only the name
// _id: it appears by default, use projection with 0 or false to hide
print("\ndb.people.findOne({}, {'name': 1, '_id': 0}");
value = db.people.findOne({}, {'name': 1, '_id': 0});
printjson(value);

// sort: Retrieves all the documents sorted by surname desc
print("\ndb.people.find().sort({'surname': -1})");
cursor = db.people.find().sort({'surname': -1});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// skip: Retrieves all the documents sorted by surname desc and skipping the
//  first three results
print("\ndb.people.find().sort({'surname': -1}).skip(3)");
cursor = db.people.find().sort({'surname': -1}).skip(3);
while(cursor.hasNext()){
    printjson(cursor.next());
}

// limit: Retrieves one document of the previous sorted by surname desc output
print("\ndb.people.find().sort({'surname': -1}).limit(1)");
cursor = db.people.find().sort({'surname': -1}).limit(1);
while(cursor.hasNext()){
    printjson(cursor.next());
}

// count: Counts the number of people
print("\ndb.people.count()");
value = db.people.count();
print(value);

// count: Same as above query
print("\ndb.people.find.count()");
value = db.people.find().count();
print(value);

// lte: Bad!! Only works the last condition :(
print("\ndb.people.find({'age': {'$gte': 5}, 'age': {'$lte': 20}}");
cursor = db.people.find({'age': {'$gte': 5}, 'age': {'$lte': 20}})
while(cursor.hasNext()){
    printjson(cursor.next());
}

// gte: Solution for the mistake above. Same as $and operator
print("\ndb.people.find({'age': {'$gte': 5, '$lte': 20}}");
cursor = db.people.find({'age': {'$gte': 5, '$lte': 20}})
while(cursor.hasNext()){
    printjson(cursor.next());
}

// find: Retrieves the document with the address.zip: 12345 and displays only
// the address subdocument
print("\ndb.people.find({'address.zip': 12345},{'address': 1, '_id': 0}");
cursor = db.people.find({'address.zip': 12345},{'address': 1, '_id': 0})
while(cursor.hasNext()){
    printjson(cursor.next());
}

// slice: Retrieves documents with the field hobbies and shows the name and 
//  the last hobby
print("\ndb.people.find({hobbies: {$exists: true}},{'_id': 0, 'name': 1, 'hobbies': {$slice: -1}}");
cursor = db.people.find({hobbies: {$exists: true}},{'_id': 0, 'name': 1, 'hobbies': {$slice: -1}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// null: Querying null values
print("\ndb.people.find({'other': {'$in': [null], '$exists': true}}");
cursor = db.people.find({'other': {'$in': [null], '$exists': true}})
while(cursor.hasNext()){
    printjson(cursor.next());
}

// find: Querying arrays. Retrieves the document with origami as a value
// in array hobbies
print("\ndb.people.find({hobbies: 'origami'})");
cursor = db.people.find({hobbies: 'origami'});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// elemMatch: Retrieves documents with some results between 8 and 10
print("\ndb.people.find({results: {'$elemMatch': {'$gte' : 8, '$lte' : 10}}}");
cursor = db.people.find({results: {'$elemMatch': {'$gte' : 8, '$lte' : 10}}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// size: Retrieves documents with three hobbies
print("\ndb.people.find({hobbies: {'$size': 3}})");
cursor = db.people.find({hobbies: {'$size': 3}});
while(cursor.hasNext()){
    printjson(cursor.next());
}
