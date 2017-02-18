import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div className="book-detail" >Select a book to get started.</div>
        }

        return (
            <div className="book-detail">
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // the return shows up as props in BookDetail
    return {
        book: state.activeBook
    };
}

// connect the state to the BookDetail props
export default connect(mapStateToProps) (BookDetail);
