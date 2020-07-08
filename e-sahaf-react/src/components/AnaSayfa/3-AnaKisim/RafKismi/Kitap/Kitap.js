import React, { Component } from 'react';
import './Kitap.css';
import KitapKapaklari2 from './KitapKapaklari2';
import KitapTanitim2 from './KitapTanitim2';


class Kitap extends Component {
  

  render() {
   
    return (
      <div className='Kitap'>
        <KitapKapaklari2 img={this.props.img}></KitapKapaklari2>
    <KitapTanitim2 name={this.props.name}></KitapTanitim2>
    
      </div>
    );
  }
}
export default Kitap;