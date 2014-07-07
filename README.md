Some MongoDB queries compiled in scripts..

## How to run the script/s:

Run the mongoDB server:
```shell
mongod --port 27017
```

Import the json document:
```shell
mongoimport -db testing --collection people res/people.json --jsonArray
```

Run the script locally:
```shell
mongo localhost:27017/testing CRUD/find.js
mongo localhost:27017/testing CRUD/delete.js
```
