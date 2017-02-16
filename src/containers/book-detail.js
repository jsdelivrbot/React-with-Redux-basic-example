import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        return (
            <div>
                <h3>Book Details</h3>
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
