import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import FilterableList from './components/FilterableList/FilterableList';
import './App.css'

class App extends React.Component {
  constructor(props) { //Default - display all files and have an empty search term
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSeachTerm(term) {
    this.setState({searchTerm: term})
  }

  updateFilterOptions(option) {
    this.setState({filterOption: option})
  }

  render() {
    return (
      <div className = 'App'>
        <SearchBar searchTerm = {this.state.searchTerm}
        filterOption = {this.state.filterOption}
        updateSearchTerm={term => this.updateSeachTerm(term)}
        />
        <FilterableList files={this.props.files}
        searchTerm = {this.state.searchTerm}
        filterOption = {this.state.filterOption}
        updateFilterOptions = {option => this.updateFilterOptions(option)}
        />
      </div>
    )
  }
}


export default App;

