import React, { Component } from 'react';
import RafKismi from './RafKismi/RafKismi';
import Logo from './Logo';


 class AnaKisim extends Component {
    render() {
        return (
            <div className='Main'>
              <Logo ></Logo>                   
        <RafKismi></RafKismi>   
            </div>
        )
    }
}
export default AnaKisim;