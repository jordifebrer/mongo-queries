/*
 * Some mongofiles examples
 */

// Gets the file test.js from the database
mongofiles -d testing get test.js

// Deletes the file test.js from the database
mongofiles -d testing delete test.js

// Puts the file test.js to the database
mongofiles -d testing put test.js

// Lists all the files in the database testing
mongofiles -d testing list

// Lists all the files starting with the name passed as a param
mongofiles -d testing list starts_with
