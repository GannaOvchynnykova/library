import '../css/App.css'
import React from 'react'
import { getBook } from '../store/store';
import BookList from './BookList';
import Title from './Title';

export default class App extends React.Component {
  state = {
    books: getBook()
  }

  onIncClickHandler = (id) => {
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(book => book.id === id);
    if (index >= 0 && newBooks[index].quantity < 10) {
      const book = { ...newBooks[index] };
      book.quantity++;
      newBooks[index] = book;
      this.setState({ ...this.state, books: newBooks })
    }
  }

  onDecClickHandler = (id) => {
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(book => book.id === id);
    if (index >= 0 && newBooks[index].quantity > 0) {
      const book = { ...newBooks[index] };
      book.quantity--;
      newBooks[index] = book;
      this.setState({ ...this.state, books: newBooks })
    }
  }

  orderHandler = () => {
    const orderBooks = this.state.books.filter(book => book.quantity > 0);
    let orderMessage = 'You order: ';
    orderBooks.forEach(b => orderMessage += `${b.title}, `);
    orderMessage += `sum of your order: ${orderBooks.reduce((sum, b) => sum += b.quantity * b.price, 0)}`
    console.log(orderMessage);
  }


  render() {
    console.log(this.state.books)
    return (
      <div className="App">
        <Title title='Library' />
        <BookList books={this.state.books}
          onDecClickHandler={this.onDecClickHandler}
          onIncClickHandler={this.onIncClickHandler}
        />
        <button style={{ marginTop: '20px' }} onClick={this.orderHandler}>order</button>
      </div>
    );
  }

}


