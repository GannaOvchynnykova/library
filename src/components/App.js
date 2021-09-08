import '../components/css/App.css';
import { getBook } from '../store/store';
import BookList from './BookList';
import Title from './Title';

export default function App() {
  return (
    <div className="App">
      <Title title='Library' />
      <BookList books={getBook()} />
    </div>
  );
}

//export default App;
