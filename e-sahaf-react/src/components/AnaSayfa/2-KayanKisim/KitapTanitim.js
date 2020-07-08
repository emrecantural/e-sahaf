import React, { Component } from 'react';
import './KayanKisim.css';
// import KitabaGit from './KitabaGit';
import KitapOzet from './KitapOzet';


 class KitapTanitim extends Component {
    render() {
        return (
            <div className='KitapTanitim'>
             <h1>{this.props.titel}</h1>
        <p className='Author'>by {this.props.author}</p>
        <KitapOzet></KitapOzet>
       {/* <KitabaGit color={this.props.color}></KitabaGit>    */}
                
            </div>
        )
    }
}
export default KitapTanitim;