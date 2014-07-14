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


db.users.ensureIndex({name: 1, role: 1})

// Uses the index ?
db.users.find().sort({name: 1, role: 1}).limit(10).explain() // name_1_role_1
db.users.find({name: 'name5000000'}).sort({name: -1, role: 1}).limit(10).explain() // name_1_role_1
db.users.find({name: 'name5000000'}).sort({name: 1, role: -1}).limit(10).explain() // name_1_role_1
db.users.find().sort({name: 'name5000000', role: 1}).limit(10).explain() // name_1_role_1
db.users.find().sort({name: 1, role: 1}).limit(10).explain() // name_1_role_1


// Not uses the index ?
/*
db.users.find().sort({name: 1, role: 1, _id: 1}).limit(10).explain()
db.users.find().sort({name: -1, role: 1}).limit(10).explain()
db.users.find().sort({name: 1, role: -1}).limit(10).explain()
db.users.find().sort({role: 1, name: 1}).limit(10).explain()
*/
