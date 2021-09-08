import Book from './Book.js'
import '../css/BookList.css'

const BookList = ({books}) => {
    return (
        <div className='book-list'>
            {books.map((book, index) =>
            <Book
            key={index}
            title={book.title}
            author={book.author}
            yearIssue={book.yearIssue}
            genre={book.genre}
            iNumber={book.iNumber}
            cover={book.cover}
            />)}
        </div>
    )
}

export default BookList;