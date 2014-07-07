// Prints all the document of a collection passed as an argument
function printDocuments(collection) {
    cursor = db[collection].find();
    while(cursor.hasNext()){
        printjson(cursor.next());
    }
}

// Prints the number of documents of a collection passed as an argument
function printCounter(collection) {
    value = db[collection].count();
    print("Number of documents: " + value);
}
