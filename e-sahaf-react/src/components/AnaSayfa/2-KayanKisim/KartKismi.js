import React, { Component } from 'react'
import KitapTanitim from './KitapTanitim';
import KitapFoto from './KitapFoto';
class KartKismi extends Component {
    render() {
        return (
            <div className='KartKismi' style={this.props.style}>
                <KitapFoto img={this.props.bookInfo.image}></KitapFoto>
        <KitapTanitim titel={this.props.bookInfo.name} author={this.props.bookInfo.author} 
        ></KitapTanitim>
            </div>
        )
    }
}
export default KartKismi;
