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

Run the scripts locally:
```shell
mongo localhost:27017/testing CRUD/create.js
mongo localhost:27017/testing CRUD/read.js
mongo localhost:27017/testing CRUD/update.js
mongo localhost:27017/testing CRUD/delete.js
mongo localhost:27017/testing Indexing/single.js
mongo localhost:27017/testing Indexing/compound.js
mongo localhost:27017/testing Aggregation/project.js
mongo localhost:27017/testing Aggregation/match.js
mongo localhost:27017/testing Aggregation/group.js
mongo localhost:27017/testing Aggregation/unwind.js
mongo localhost:27017/testing Aggregation/sort.js
mongo localhost:27017/testing Aggregation/limit.js
mongo localhost:27017/testing Aggregation/skip.js

```
