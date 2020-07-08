import React, { Component } from 'react';
import './Header.css';
class Title extends Component {
    render() {
        return (
            <div className='Title'
            style={{
    
                color: '#eaeafc',
                fontSize: '3em',
                fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
              }}>
           e-Sahaf
            </div>
        )
    }
}
export default Title;