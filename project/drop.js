/**
 * Script to delete the current collections
 */

//Project collections
db.books.drop()
db.results.drop()

// Files
db.fs.files.drop()
db.fs.chunks.drop()
