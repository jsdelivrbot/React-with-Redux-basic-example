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

## 005 Binding action creators to container props
* Action creators are functions that create the action objects. Action objects contain a *type* property that describes the action. When an action is created, it is sent to all the reducers in the application. If a reducer has a switch case with a matching action type, then the reducer will return the matching value for the relevant application state. The new state is mapped to all containers and the containers rerender with new props.
* In *src/actions/index.js* create the *selectBook* action creator. It takes a *book* object as an argument. For the time being it will console log the *book.title*.
* This action has to be called whenever a user clicks on a book in the list. It also has to be dispatched to all the reducers. So it has to be wired up to Redux. This will be done by binding the *selectBook* action to the *BookList* component.
* Inside *src/containers/book-list.js* import the *selectBook* property from *'../actions/index'*.
* Import the *bindActionCreators* function from *'redux'*. This is the function that dispatches the action to all the reducers.
* Create the *mapDispatchToProps* function which takes the *dispatch* object as an argument and returns the *bindActionCreators* function.
* The *bindActionCreators* function takes the *{selectBook: selectBook}* object as its first argument and the *dispatch* object as its second argument and binds them together.
* In the exported container, *mapDispatchToProps* is also being connected to the *BookList* component. Now both the returns of *mapStateToProps* and *mapDispatchToProps* are available as props in *BookList*.

## 006 Create an action
* Now *BookList* should be able to call the *selectBook* action creator.
* Create a click event handler in the *li* item of *BookList*. On click, a callback function calls the available property function *selectBook()* with *book* as an argument.
* The click handler operates as expected, the relevant console messages appear on clicks, along with error messages stating that actions must be plain objects.
* The action object has to contain a *type* and a *payload* so in *src/actions/index.js* the *selectBook* action creator is edited accordingly. The type value is set to *'BOOK_SELECTED'* and the payload value to *book*.

## 007 Consume the created action in the relevant reducer
* Inside the *src/reducers* folder create the *reducer_active_book.js* file. This reducer will contain the relevant switch case for the *'BOOK_SELECTED'* action type and return the relevant payload to the application state when the case is matched.
* Reducers get two arguments, *state* and *action*. The initial state is assigned to *null* so that Redux does not produce an *undefined* error.
* In *src/reducers/index.js* import *ActiveBookReducer* from *'./reducer_active_book'*.
* Add the line *activeBook: ActiveBookReducer* inside the *combineReducers* function's argument object. This way the state *activeBook* is being mapped to the product of the *ActiveBookReducer* reducer.

## 008 Create the *book-detail* container
* In the *src/containers* folder create the *book-detail.js* file. This will contain the *BookDetail* component which be rendering the details of the selected book, which will be passed to it as properties via the *activeBook* state. To start with and for testing purposes it shall return just a static element.
* In *src/components/app.js* import *BookDetail* from *'../containers/book-detail'*.
* Return the *BookDetail* tag in the default app render.
