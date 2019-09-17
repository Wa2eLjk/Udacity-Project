import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

class BooksShelf extends Component {
  state = {
    shelf: ''
  }
 
  render() {
    const { books, update } = this.props
    const C_reading =  books.filter(b => {
      return b.shelf === 'currentlyReading'
    })
    const W_read = books.filter(b => {
      return b.shelf === 'wantToRead'
    })
    const read = books.filter(b =>{
      return b.shelf ==='read'
    })
    
    return (
  
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                
                 {C_reading.map((book) => (
                    <li key={book.id}>
                   <Book SingleBook ={book} update={update} allBooks={books} />
                   </li>
                   ))}

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {W_read.map((book)=>(
                    <li key={book.id}>
                    <Book SingleBook ={book} BookData= {book} allBooks={books} update={update}/>
                    </li>
                     ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book)=>(
                    <li key={book.id}>
                    <Book SingleBook ={book} allBooks={books} update={update}/>
                    </li>
                 ))}
                </ol>
              </div>
            </div>

          </div>
        </div>
        <div className="open-search">
          <Link className="open-search Link" to="/Search" >Add</Link>
        </div>
      </div>
    )

  }


}
export default BooksShelf