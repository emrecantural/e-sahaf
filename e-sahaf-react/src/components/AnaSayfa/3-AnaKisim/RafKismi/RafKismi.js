import React, { Component } from 'react';
import Kitaplar from './Kitaplar';
import bookInfo from './books.json';
import NavigationPanel from './NavigationPanel';


 class RafKismi extends Component {
    constructor(props) {
		super(props);
		this.state = {
			activeFilter: 'business',
		};
	}
  
  onFilterChange = (filter) => {
    this.setState({activeFilter: filter});
  }
  render() {
    let currentBooks = [];
    for (let i=0; i<bookInfo.store.length; i++) {
      if (bookInfo.store[i].category === this.state.activeFilter) {
        currentBooks = bookInfo.store[i].books;
        break;
      }
    }
    return (
      <div className='RafKismi'>
        <NavigationPanel onMainFilterClick={this.onFilterChange} activeTab={this.state.activeFilter}></NavigationPanel>
        <Kitaplar books={currentBooks}></Kitaplar>
      </div>
    );
  }
}
export default RafKismi;