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

## 003 Create the *book-list* component, then promote it to a container
* In the *src/components* folder create the *book-list.js* file. This will be rendering the list of books, provided as a props item to it, *this.props.books*.
* Using the *map* function on the props item *books*, a *renderList()* function is created and supplied to render.
* A container is a React component that has a direct connection to the state managed by Redux. The *BookList* component will be connected to state, so it is being promoted to a container. Create the *src/containers* folder and move *book-list.js* into it.

## 004 Implement a container class
* Import the *BookList* container from *'../containers/book-list'* into the application in *src/components/app.js*.
* Return the *BookList* tag in the default app render.
* Inside *src/containers/book-list.js* import the *connect* property from *'react-redux'*.
* The *mapStateToProps* function takes the application state as an argument and returns an object that declares what can be mapped as props to the connected view. In this case it takes the *state.books* and maps it to a *books* property.
* The file is now set to export by default the state container, which is the product of the connection between the return of *mapStateToProps* and the *BookList* component. 
