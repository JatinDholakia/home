import React, {Component, useState } from "react";  
import axios from 'axios';  
import './App.css';  
import { Card, CardDeck } from 'react-bootstrap';  
class Books extends Component {  
    constructor(){
        super();
        this.bookUrl = "https://google.co.in/books/edition/";
        this.bookshelfUrl = "https://www.googleapis.com/books/v1/users/115194104351726311544/bookshelves/0/volumes?maxResults=40";
        this.state = {
            books: []
        };
    } 

    componentDidMount() {  
        axios.get(this.bookshelfUrl)  
            .then(response => {
                console.log(response.data.items);    
                this.setState({books : response.data.items});  
    })
}  
    render() {  
        const {books} = this.state;
        return(
            <div className="container">

                <div className="row">  
                        {books.map((book) => {  
                            return(
                            <div className="col-sm-2">
                                <Card style={{ 'marginTop': '10px'}} bg="light" text="dark">
                                    <center>                                    <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                    <Card.Header as = "h5" href={this.bookUrl.concat(book.volumeInfo.title,"/", book.id).replace(/ /g,"_")}>
                                        {book.volumeInfo.title}
                                    </Card.Header>
                                    </center>
                                    <Card.Body>
                                        <Card.Text><small>
                                            {book.volumeInfo.authors.join()} - {book.volumeInfo.publishedDate.substr(0,4)} - {book.volumeInfo.categories.join()}
                                            </small>
                                        </Card.Text>
                                        <a className="btn btn-primary" href={this.bookUrl.concat(book.volumeInfo.title,"/", book.id).replace(/ /g,"_")}>Know more</a>  
                                    </Card.Body>
                                    
                                </Card>  
                            </div>  
                            );
                        })}
                </div>   
                </div>
        )  
}  
}
  
export default Books;