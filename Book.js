// Task 1: Constructor function for the Book object
function Book(title, author, pages) {{
this.title = title;
this.author = author;
this.pages = pages;
}}
// Task 2: Method to display book information
Book.prototype.displayInfo = function() {{
console.log(Title: ${this.title});
console.log(Author: ${this.author});
console.log(Pages: ${this.pages});
}};
// Task 3: Array to store book objects
const books =;
// Function to add a new book
function addBook(title, author, pages) {{
const newBook = new Book(title, author, pages);
books.push(newBook);
}}
// Function to search for books by title or author
function searchBooks(searchTerm) {{
const results = books.filter(book =>
book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
book.author.toLowerCase().includes(searchTerm.toLowerCase())
);
return results;
}}
// Task 4: Functions using filter and map methods
// Filter books with more than 100 pages
function filterLongBooks() {{
const longBooks = books.filter(book => book.pages > 100);
return longBooks;
}}
// Map method to add "Title: " and "Author: "
function formatBookInfo() {{
const formattedBooks = books.map(book => ({{
...book,
title: Title: ${book.title},
author: Author: ${book.author}
}}));
return formattedBooks;
}}
// Example Usage
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1178);
addBook("Pride and Prejudice", "Jane Austen", 279);
addBook("1984", "George Orwell", 328);
const searchResults = searchBooks("Tolkien");
console.log("Search Results:", searchResults);
const longBooks = filterLongBooks();
console.log("Long Books:", longBooks);
const formattedBooks = formatBookInfo();
console.log("Formatted Books:", formattedBooks);
""")
