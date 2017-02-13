export const selectBook = (book) => {
    // selectBook is an action creator, it needs to return
    // an object with a type property and optionally a payload.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
