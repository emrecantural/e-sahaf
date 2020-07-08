import React, { Component } from 'react';
import Header from '../1-Header/AltHeader';
import AltHeader from '../1-Header/Header';
import './KitapKayit.css';
import KitapKayitFormu from './KitapKayitFormu';
class Basarili extends Component {


  render() {
    return (


      <div >    <AltHeader>              </AltHeader>

              <div className='panel'><KitapKayitFormu> </KitapKayitFormu>               </div>
  <Header>  </Header>
      
      </div>
            

    )
  }
}

export default Basarili;
