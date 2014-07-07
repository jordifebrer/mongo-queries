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

// regex: Retrieves documents starting name with 'J'
print("\ndb.people.find({name: {$regex: /^J/}}");
cursor = db.people.find({name: {$regex: /^J/}});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// and: Retrieves documents starting name with 'J' and surname 'S'
print("\ndb.people.find({$and: [{name: {$regex: /^J/}}, {surname: {$regex: /^S/}}]}");
cursor = db.people.find({$and: [{name: {$regex: /^J/}}, {surname: {$regex: /^S/}}]});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// or: Retrieves documents starting name with 'J' or surname 'D'
print("\ndb.people.find({$or: [{name: {$regex: /^J/}}, {surname: {$regex: /^D/}}]}");
cursor = db.people.find({$or: [{name: {$regex: /^J/}}, {surname: {$regex: /^D/}}]});
while(cursor.hasNext()){
    printjson(cursor.next());
}

// in: Retrieves documents with surname in the list ['Smith', 'Dupont']
print("\ndb.people.find({surname: {'$in': ['Smith', 'Dupont']}})");
cursor = db.people.find({surname: {'$in': ['Smith', 'Dupont']}});
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
print("\ndb.people.findOne({}, {'name': 1, '_id': false}");
value = db.people.findOne({}, {'name': 1, '_id': 0});
printjson(value);

// sort: Retrieves all the documents sorted by surname desc
print("\ndb.people.find().sort({'surname': -1})");
cursor = db.people.find().sort({'surname': -1});
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
