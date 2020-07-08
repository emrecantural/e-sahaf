import React from 'react';
import './KitapKayit.css';

import axios from 'axios';
import Header from '../1-Header/Header';
import AltHeader from '../1-Header/AltHeader';


class TumKitaplar extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <div  className="abc">
        <Header ></Header>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      
      </ul>         <AltHeader ></AltHeader>
 </div >
    )
  }
}
export default TumKitaplar;