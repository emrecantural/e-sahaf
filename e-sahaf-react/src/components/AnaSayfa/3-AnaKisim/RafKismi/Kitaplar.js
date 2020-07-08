import React, { Component } from 'react';
import './AnaKisim.css';
import Kitap from './Kitap/Kitap';



class Kitaplar extends Component {
    render() {
        let bookCards = [];
        for (let i=0; i<this.props.books.length; i++) {
          bookCards.push(<Kitap key={i} name={this.props.books[i].name} img={this.props.books[i].image} 
            author={this.props.books[i].author} ></Kitap>);
        }
        return (
          <div className='Kitaplar'>
            {bookCards}
          </div>
        );
      }
    }

export default Kitaplar;