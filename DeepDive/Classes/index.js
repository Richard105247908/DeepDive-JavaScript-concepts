// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes= []) {
	// your code here
	this.id=id;
	this.title=title;
	this.author=author;
	this.themes=themes;
}

Book.prototype.addtheme =function(theme){
	this.themes = [...this.themes,theme]
	
}

Book.prototype.addtheme =function(theme){
	this.themes = [...this.themes,theme]
	
}

const Book1 = new Book(1, "lord of the rings", "someguy");
Book1.addtheme("fantasy","action");

const Book2 = new Book(2, "Game of thrones", "some other guy");
Book2.addtheme("Magic", "fanstasy");

console.log(Book1.title);
console.log(Book2.title);