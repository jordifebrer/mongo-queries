load("lib/helpers.js")


if (db['users'].count() == 0) {
    // Creates 10.000.000 users with a serial _id, name and a random role
    // between 1 and 10
    for (var i=0; i < 10000000; i++) {
        var user = {
            "_id": i,
            "name": "name" + i,
            "role": Math.floor((Math.random() * 10) + 1)
        }
        db.users.insert(user);
    }
}
db.users.find({name: 'name5000000'}).explain()


// ensureIndex: Creates an index on role
print("\ndb.users.ensureIndex({name: 1})");
db.users.ensureIndex({name: 1});
db.users.find({name: 'name5000000'}).explain()
/*
{
    "cursor" : "BtreeCursor name_1",
    "isMultiKey" : false,
    "n" : 1,
    "nscannedObjects" : 1,
    "nscanned" : 1,
    "nscannedObjectsAllPlans" : 1,
    "nscannedAllPlans" : 1,
    "scanAndOrder" : false,
    "indexOnly" : false,
    "nYields" : 0,
    "nChunkSkips" : 0,
    "millis" : 0,
    "indexBounds" : {
        "name" : [
            [
                "name5000000",
                "name5000000"
            ]
        ]
    },
    "server" : ""
}
*/

// dropIndex: Removes the index on role
print("\ndb.users.dropIndex({name: 1})");
db.users.dropIndex({name: 1});
db.users.find({name: 'name5000000'}).explain()
/*
{
    "cursor" : "BasicCursor",
    "isMultiKey" : false,
    "n" : 1,
    "nscannedObjects" : 10000000,
    "nscanned" : 10000000,
    "nscannedObjectsAllPlans" : 10000000,
    "nscannedAllPlans" : 10000000,
    "scanAndOrder" : false,
    "indexOnly" : false,
    "nYields" : 7,
    "nChunkSkips" : 0,
    "millis" : 4763,
    "indexBounds" : {

    },
    "server" : ""
}
*/

// dropIndex: Removes all indexes of the collection except for the _id
print("\ndb.users.dropIndexes()");
db.users.dropIndexes();

// Uses the index ?
db.users.find({role: 1}).sort({_id: 1}).limit(10).explain() // _id_
db.users.find({role: 1}).sort({name: 1}).limit(10).explain() // name_1
db.users.find({role: 1}).sort({name: 1}).limit(10).explain() // name_1
db.users.find({role: 1},{name:1, _id:0}).sort({name: 1}).limit(10).explain() // name_1
db.users.find({role: 1, _id:0},{name:1, _id:0}).sort({name: 1}).limit(10).explain() // _id_
db.users.find({name:'name5000000', role: 1}).sort({name: 1}).limit(10).explain() // name_1
db.users.find({name:'name5000000', _id: 5000000}).sort({name: 1}).limit(10).explain() // _id_
db.users.find({name:'name5000000'}).sort({name: 1}).limit(10).explain() // name_1

// Not uses the index ?
/*
db.users.find({role: 1}).sort({_id: 1, name: 1}).limit(10).explain()
db.users.find({role: 1}).sort({name: 1, _id: 1}).limit(10).explain()
db.users.find({role: 1}).sort({name: 1, _id: -1}).limit(10).explain()
*/

// hint: Forces to use a specified index, in this example name_1 instead of _id_
db.users.find({name:'name5000000', _id: 5000000}).sort({name: 1}).limit(10).explain()

// getIndexes: Lists all indexes on a collection
print("\ndb.users.getIndexes()");
db.users.getIndexes();

// db.system.indexes.find(): Lists all indexes on a database
print("\ndb.system.indexes.find()");
db.system.indexes.find();
