## React with Redux basic example

* Part of [Modern React with Redux](https://www.udemy.com/react-redux/)
* Using the [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter) boilerplate by [Stephen Grider](https://github.com/stephengrider)

## 001 Make a reducer
* A reducer is a function that returns a piece of the application state. In this little application the two pieces of state will be:
	1. books: a list of books and
	2. activeBook: the book that will be presented in the book-detail section.
* One reducer per piece of state wil be implemented.
* Inside the *src/reducers* folder create the *reducer_books.js* file.
* This file will export by default a function that returns an array of book objects.
* Each book object contains a *title* property and the relative book-title value. The values are actually the output of the BooksReducer.

## 002 Wire the reducer into the application
* In *src/reducers/index.js* which exports the *rootReducer*, the *BooksReducer* is imported from *'./reducer_books'*.
* The *rootReducer* is defined by the *combineReducers* function. This function takes an object as an argument.
* Add the line *books: BooksReducer* inside the *combineReducers* function's argument object. This way the state *books* is being mapped to the product of the *BooksReducer* reducer.
