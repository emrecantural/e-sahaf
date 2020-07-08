import React, { Component } from 'react';
import Header from './1-Header/Header';
import KayanKisim from './2-KayanKisim/KayanKisim';
import AnaKisim from './3-AnaKisim/AnaKisim';
import AltHeader from './1-Header/AltHeader';


class Anasayfa extends Component {
    render() {
        return (
            <div>
                
                <Header></Header>
                <p></p>
                <KayanKisim></KayanKisim>
                <AnaKisim></AnaKisim>
                <AltHeader></AltHeader>
            </div>
        )
    }
}
export default Anasayfa;