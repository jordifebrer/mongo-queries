// Retrieves all the people/documents
print('\nb.people.find()');

cursor = db.people.find();
while(cursor.hasNext()){
    printjson(cursor.next());
}

// Counts the number of people
print('\ndb.people.count()');

value = db.people.count();
print(value);
