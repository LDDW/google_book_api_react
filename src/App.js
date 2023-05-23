import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './components/BookCard';

export default function App() {

  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)  
      .then(function (response) {
        console.log(response);
        setBooks(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <nav className='flex items-center justify-center w-full h-20 bg-gray-50 shadow-sm'>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} className='border w-96 p-2' />
        <button onClick={searchBooks} className='bg-blue-500 p-2 px-4 text-white'>Search</button>
      </nav>
      <div className='w-full flex items-center justify-center flex-col gap-6 p-6'>
        {books.map((book) => {
          return (
            <BookCard book={book} key={book.id} />
          );
        })}
      </div>
    </div>
  );
}
