import React, { Component } from 'react';
import logo from './logo.svg';
import './RafKismi/AnaKisim.css';

 class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                        <img alt='foto' src={logo}/>

            </div>
        )
    }
}
export default Logo;