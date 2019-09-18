import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Book from './Book'


class SearchBooks extends Component {
  constructor() {
    super()
    this.state = {
      query: "",
      books: [],
      homeBooks: []
    }
    this.timer = null
  }



  ChangeOpetions = (book, shelf) => {
    BooksAPI.update(book, shelf)



  }
  componentDidMount() {
    BooksAPI.getAll().then((homeBooks) => {
      this.setState(() => ({
        homeBooks
      }))
    })
  }
  UpdateQuery(query) {
    this.setState(() => ({
      query: query
    }))
  }
  handleChange = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (this.state.query === '') {
        this.setState(() => ({
          books: []
        }))

      }

      else {
        BooksAPI.search(this.state.query).then((books) => {
             if (books.error === 'empty query') {
                 this.setState(() => ({
                 books: []
                   }))
                  alert('Sorry we couldnt find what you are looking for')
             } else {
                   this.setState(() => ({
                  books
                   }))

                }
             })
              
            }

    

  }, 2000)

}


componentDidUpdate(prevState, pS) {
  if (pS.query !== this.state.query) {

    this.handleChange()

  }

}
render() {
  const { query, books } = this.state
  return (
    <form onSubmit={() => this.SubmitForm}>
      <div className="search-books">

        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">



            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input id="textbox" type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.UpdateQuery(event.target.value)} />

          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">

            {books.map((Searchedbooks) => (
              <li key={Searchedbooks.id}>

                <Book SingleBook={Searchedbooks} SingleSearchedBook={Searchedbooks} BooksHome={this.state.homeBooks} update={this.props.update} />
              </li>
            ))}
          </ol>
        </div>

      </div>
    </form>
  )
}

}

export default SearchBooks