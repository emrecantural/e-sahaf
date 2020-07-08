
import './App.css';

import React, { Component } from 'react';
import{
  BrowserRouter as Router, Route
} from 'react-router-dom';
import KitapKayit from './components/AnaSayfa/4-KitapKayit/KitapKayit';
import Anasayfa from './components/AnaSayfa/Anasayfa';
import TumKitaplar from './components/AnaSayfa/4-KitapKayit/TumKitaplar'
const Home = () => (
  <Anasayfa></Anasayfa>
  
);
const kitapkayit = () => (
  <KitapKayit></KitapKayit>
  
);
const tumkitaplar = () => (
  <TumKitaplar></TumKitaplar>
  
);







 class App extends Component {
  render() {
    return (
      <Router>
      <div>  
      <Route exact path ="/"  component= {Home}/>  
      <Route path ="/kitapkayit"  component= {kitapkayit}/>  
      <Route path ="/tumkitaplar"  component= {tumkitaplar}/>  



               </div>
                     </Router>
    )
  }
}
export default App;