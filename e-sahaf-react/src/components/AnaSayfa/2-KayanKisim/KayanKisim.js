import React, { Component } from 'react';
import KartKismi from './KartKismi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookInfo from './books.json';
import './KayanKisim.css';
 class KayanKisim extends Component {
  getCategoryBook = () => {
    const backgroundColors = [
 {backgroundColor:'#eaeafc'}, 
 {backgroundColor:'#eaeafc'}, 
 {backgroundColor:'##eaeafc'}, 
{backgroundColor:'#eaeafc'}, 
 {backgroundColor:'#eaeafc'}, 
 {backgroundColor:'#eaeafc'}, 
    ]; 
    const darkColors = [ 
      {color:'#AD1457'}, 
      {color:'#01579B'}, 
      {color:'#6A1B9A'}, 
      {color:'#D50000'}, 
      {color:'#00C853'}, 
    ];
    
    let carouselBooks = [];
    for (let i=0; i < bookInfo.store.length; i++) {
      const color = backgroundColors[i];
      const dark = darkColors[i];
      carouselBooks.push(
        <div key={i} ><KartKismi bookInfo={bookInfo.store[i].books[0]} style={color} dark={dark}></KartKismi></div>
      );
    };
    return carouselBooks;
  }
  render() {
    var settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '30px',
      slidesToShow: 3,
      speed: 500
    }
    
    
        return (
      <div className='KayanKisim'>
         <Slider {...settings}>
          {this.getCategoryBook()}
        </Slider>
      </div>
    );
    } 
 }
export default KayanKisim;