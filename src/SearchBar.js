import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
        <input type="search" placeholder="search" filterText={this.props.filterText} />
    );
  }
}
export default SearchBar;

SearchBar.propTypes={
    filterText: PropTypes.string.isRequired
}