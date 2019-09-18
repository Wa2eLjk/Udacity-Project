import React, { Component } from 'react'






class Select extends Component {
    state = {
        allbooks: []
    }
    Change = (E) => {
        if (this.props.BookData !== 'undefined') {
            this.props.update(this.props.book, E.target.value)
            
        }
        else {
           
            this.props.update(this.props.single, E.target.value)

        }
    }


    render() {
        let status = 'none'
        const { book, single, BooksHome } = this.props



        if (typeof (single) === 'undefined') {
            status = book.shelf
            
        } else {

            for (let Book of BooksHome) {
                if (Book.id === single.id) {
                    status = Book.shelf;

                }
                else {

                }


            }
        }






        return (
            <div>




                <select onChange={this.Change} defaultValue={status}>
                    <option value='MoveTO' disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>

        )
    }
}
export default Select