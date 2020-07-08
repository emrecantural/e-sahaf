import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
class KitapEkle extends Component {
    render() {
        return (
            <div >
      <ButtonGroup aria-label="Basic example">
      <Button  className='tumkitaplar' href='/tumkitaplar'><span> Tüm Kitaplar</span></Button>

  <Button className='kitapkayit' href= '/kitapkayit'> <span>Kitap Ekle </span></Button>
  <Button  className='kitapkayit' href='/'><span> Ana Sayfa </span></Button>
</ButtonGroup>
            </div>
        )
    }
}
export default KitapEkle;