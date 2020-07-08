import React, { Component } from 'react';
import bookInfo from '../../books.json';
import './Header.css';
class Category extends Component {
    render() {
        const categories = bookInfo.store.map((x, index) => {
        return (
            <option key={index}>{x.category}</option>
      )
    })
    return (
        <div className='Category'>
          <select>
            <option value="" disabled selected>Kategoriler</option>
            {categories}
          </select>
                
            </div>
        )
    }
}
export default Category;