import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import PropTypes from 'prop-types';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      filterText: ''
    }
  }
  handleUserInput(searchTerm){
    this.setState({filterText: searchTerm})
  }
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
      </div>
    );
  }
}

App.propTypes  = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};


