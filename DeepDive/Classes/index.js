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

const Book1 = new Book(1, "lord of the rings", "someguy");
Book1.addtheme("fantasy","action");

const Book2 = new Book(2, "Game of thrones", "some other guy");
Book2.addtheme("Magic", "fanstasy");

console.log(Book1.title);
console.log(Book2.title);

// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].
// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().
// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()
// Beginning:

class Film {
	//Your code here.
    constructor(id,title,director,releaseYear, genre=[]){
        this.id=id;
        this.title=title;
        this.director=director;
        this.releaseYear=releaseYear;
        this.genre=genre;
    }

    addGenre(genres){
        this.genre=[...this.genre, genres];
    }

    getFilmTitle(){
        return `Title: ${this.title}`
    }

}

// Rest of your code here. 
const film1= new Film(1,"Van helsing","Stephen Sommers",2004);
film1.addGenre("Horror");
console.log(film1.getFilmTitle());

