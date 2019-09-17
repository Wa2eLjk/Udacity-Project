import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './BookShelf'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books:[]
  
  }
  GetallData(){
    BooksAPI.getAll().then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
componentDidMount(){
    this.GetallData()
}
ChangeOpetions = (book, shelf ) => {
  BooksAPI.update(book, shelf)
  this.GetallData()
  
}

  render() {
    
    return (
      <div className="app">
       
            <Route exact path="/" render={()=>(

              <BooksShelf books={this.state.books} update={this.ChangeOpetions}/>
            )}/>
            <Route exact path ="/search" render={() => (
              
              <SearchBooks update={this.ChangeOpetions}/>
            )}/>
          
          </div>
        
     
    )
  }
}

export default BooksApp
