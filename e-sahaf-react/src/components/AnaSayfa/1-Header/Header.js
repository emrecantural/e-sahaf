import React, { Component } from 'react';
import './Header.css';
import Title from './Title';
import Search from './Search';
import KitapEkle from './KitapEkle';

 class Header extends Component {
    render() {
        return (
            <header>

            <Title></Title>
            <KitapEkle></KitapEkle>
            
            </header>

        )
    }
}
export default Header;