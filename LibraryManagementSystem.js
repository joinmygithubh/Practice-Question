class Book{
    #ISBN;
    constructor(title, author, ISBN, availableCopies){
        this.title = title
        this.author = author
        this.#ISBN = ISBN
        this.availableCopies = availableCopies;
    }
    get availableCopies(){
        return this._availableCopies;
    }
    set availableCopies(copies){
        if(typeof copies === 'number' && copies >=0){
            this._availableCopies = copies;
        }
        else{
            console.error("Invalid copies")
        }
    }
    #validateISBN(ISBN){
        return typeof ISBN === "string" && ISBN.length === 13;
    }
    get ISBN(){
        return this.#ISBN;
    }
    set ISBN(newIsbn){
        if(this.#validateISBN(newIsbn)){
            this.#ISBN= newIsbn;
        }
        else{
            console.log("Invalid ISBN");
        }
    }
    static ISBNgeneration (){
        return Math.floor(100000000000 + Math.random()+90000000).toString();
    }
}
class Library{
    constructor(){
        this.books =[];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(ISBN){
        this.books = this.books.filter(book => book.ISBN !== ISBN)
        
    }
    searchBooks(query){
        return this.books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );
    }
    displayBooks(){
        this.books.forEach(book =>{
            console.log("Title "+ book.title + ","+ "Author: " + book.author + "," + "ISBN:" + book.ISBN + "," + "Available Copies" + book.availableCopies )
        })
    }
}
let book1 = new Book("Java Basics", "Sameer", Book.ISBNgeneration(), 12)
let book2 = new Book("C++", "James Goslin", Book.ISBNgeneration(),5)
let book3 =new Book ("C sharp", "James Goslin",Book.ISBNgeneration(),12)
let book4 = new Book("Swift By Python", "James Will", Book.ISBNgeneration(),9);
let book5 = new Book("Physic", "authorxyz",Book.ISBNgeneration(),12);
let book6 = new Book("Chemistry", "authorxyz",Book.ISBNgeneration(),12);


let library = new Library();

library.addBook(book1);
library.addBook(book2)
library.addBook(book3)
library.addBook(book4);
library.addBook(book5);
library.addBook(book6)
library.displayBooks();

console.log(library.searchBooks("Java Basics"))
console.log(library.searchBooks("C sharp"))
console.log(library.searchBooks("Swift"))
console.log(library.searchBooks("C"))
console.log(library.searchBooks("Swift By Python"));
console.log(library.searchBooks("Physic"))
library.removeBook(book1.ISBN);

library.displayBooks();