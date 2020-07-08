import React, { Component } from 'react';
import './KayanKisim.css';
class KitabaGit extends Component {
    render() {
        return (
            <div className='KitabaGit' style={this.props.color}>
              <button href='/kitabagit' style={this.props.color} >Kitaba Git</button>   
            </div>
        )
    }
}
export default KitabaGit;