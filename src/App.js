import React, { Component } from 'react';
import Search from './Search';
import ContactList from './ContactList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

App.propTypes  = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default App;

