import '../css/Book.css'
import Counter from './Counter.js'
import Button from './Button'

export default function Book({ title, author, cover}) {
    return (
        <div className='book'>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <img src={cover} alt={title}></img> <hr></hr>
            <Button clickHandler={clickHandler} />
            <Counter />
        </div>
    )
}


 function clickHandler(event, yearIssue, genre, iNumber) {
    return (
        <div>
            <h5>{genre}</h5>
            <h5>{yearIssue}</h5>
            <h5>{iNumber}</h5>
        </div>
    )
}
