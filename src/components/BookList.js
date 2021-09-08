import Book from './Book.js'
import '../css/BookList.css'

const BookList = ({ books, onDecClickHandler, onIncClickHandler }) => {
    return (
        <div className='book-list'>
            {books.map((book) =>
                <Book
                    key={book.id}
                    book={book}
                    onDecClickHandler={onDecClickHandler}
                    onIncClickHandler={onIncClickHandler}
                /*
                title={book.title}
                author={book.author}
                yearIssue={book.yearIssue}
                genre={book.genre}
                cover={book.cover}*/
                />)}
        </div>
    )
}

export default BookList;