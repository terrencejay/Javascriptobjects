// Task 1: Book Constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Method to display book information
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

// Task 3: Library System
const LibrarySystem = {
    books: [],
    
    // Add new book
    addBook: function(title, author, pages) {
        const newBook = new Book(title, author, pages);
        this.books.push(newBook);
        return newBook;
    },
    
    // Search by title
    searchByTitle: function(title) {
        return this.books.filter(book => 
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    },
    
    // Search by author
    searchByAuthor: function(author) {
        return this.books.filter(book => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    },
    
    // Task 4: Filter books over 100 pages
    getLongBooks: function() {
        return this.books.filter(book => book.pages > 100);
    },
    
    // Task 4: Format book information
    getFormattedBooks: function() {
        return this.books.map(book => ({
            title: "Title: " + book.title,
            author: "Author: " + book.author,
            pages: book.pages
        }));
    }
};

// Example usage:
// Adding books
LibrarySystem.addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
LibrarySystem.addBook("Animal Farm", "George Orwell", 112);
LibrarySystem.addBook("The Little Prince", "Antoine de Saint-Exupéry", 96);

// Search examples
console.log("Searching for 'great':");
console.log(LibrarySystem.searchByTitle("great"));

// Get long books (>100 pages)
console.log("Books with more than 100 pages:");
console.log(LibrarySystem.getLongBooks());

// Get formatted books
console.log("Formatted book list:");
console.log(LibrarySystem.getFormattedBooks());
