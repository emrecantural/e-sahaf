import React, { Component } from 'react';
import './Kitap.css';


class KitapKapaklari2 extends Component {
    render() {
        return (
            <div className='KitapKapaklari2'>
        <img alt='foto' src={require('./KitapKapaklari/'+this.props.img)} />
      </div>
        )
    }
}
export default KitapKapaklari2;