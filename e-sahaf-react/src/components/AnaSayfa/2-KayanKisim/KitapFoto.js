import React, { Component } from 'react';
class KitapFoto extends Component {
    render() {
        return (
            <div className='KitapFoto'>
             
        <img alt="foto" src={require('./KitapKapaklari/' + this.props.img)} />
      
            </div>
        )
    }
}
export default KitapFoto;