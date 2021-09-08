import '../css/Book.css'
import Counter from './Counter.js'
//import Button from './Button'

export default function Book({ book: { id, title, author, yearIssue, genre, cover, price, quantity }, onDecClickHandler, onIncClickHandler }) {
    return (
        <div className='book'>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>Genre: {genre}, year of issue: {yearIssue}</p>
            <img src={cover} alt={title}></img> <hr></hr>
            <h3>Price: {price}</h3>
            <Counter id={id}
                quantity={quantity}
                onDecClickHandler={onDecClickHandler}
                onIncClickHandler={onIncClickHandler}
            />
            <h3 style={{color: 'red'}}>Total: {price * quantity}&euro;</h3>
        </div>
    )
}

/*
<Button clickHandler={(event) => clickHandler(event, 'w100')} />

function clickHandler(event, className) {
    console.log(event.nativeEvent);
    //event.target.nativeEvent;
    event.target.parentNode.querySelector('img').classList.toggle(className);
}

function titleClickHandler(event) {
    event.target.style.color = 'red';
}
*/
