import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    // whatever it returns shows up as props inside of BookList
    // because they are connected below
    return {
        books: state.books
    };
}

// the return from this function will also show up as props
// in the BookList container
const mapDispatchToProps = (dispatch) => {
    // whenever selectBook is called, the result should be
    // passed to all of our reducers
    return bindActionCreators({selectBook}, dispatch);
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList);
