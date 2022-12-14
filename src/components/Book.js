import React from 'react'
import propTypes from 'prop-types'
import noThumbnailImage from '../icons/no_cover_thumb.gif'

// Stateless functional component is used as we are using only render method.
const Book = (props) => {
    const {book,onChangeShelf} = props
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                             style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noThumbnailImage})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(event) => onChangeShelf(book,event.target.value)}
                                value={book.shelf ? book.shelf : 'none'}>
                                <option value="moveTo" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title ? book.title : null}</div>
                    { // If there are multiple authors, display them on separate lines
                        book.authors &&
                        book.authors.map((author,index) =>(
                        <div className="book-authors" key={index}>{author}</div>
                    ))}
            </div>
        </li>
    )
}

// PropTypes are used to run typechecking on the props for a component
Book.propTypes = {
    book: propTypes.object.isRequired,
    onChangeShelf: propTypes.func.isRequired
}

export default Book