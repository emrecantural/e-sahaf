import React, { Component } from 'react';
import './Kitap.css';
import KitapOzetleri2 from './KitapOzetleri2';

class KitapTanitim2 extends Component {
    render() {
   
        return (
            <div className='BookInfo'>
            <h1>{this.props.name}</h1>
            <p className='Author'>by {this.props.author}</p>
            <KitapOzetleri2></KitapOzetleri2>
          </div>
        )
    }
}
export default KitapTanitim2;