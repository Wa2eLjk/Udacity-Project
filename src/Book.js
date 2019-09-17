import React, {Component} from 'react'
import Select from './Select'


class book extends Component {
    render(){
        const {SingleBook,BooksHome,SingleSearchedBook,update, BookData} = this.props
        return(
            
               
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${SingleBook.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            
                            <Select book={SingleBook} homebook={BookData} single={SingleSearchedBook} BooksHome={BooksHome} update={update}/>
                          </div>
                        </div>
                        <div className="book-title">{SingleBook.title}</div>
                        <div className="book-authors">{SingleBook.authors}</div>
                      </div>
                    

        )
    }

}
export default book