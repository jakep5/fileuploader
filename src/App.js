import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import FilterableList from './components/FilterableList/FilterableList';

class App extends React.Component {
  render() {
    return (
      <div className = 'App'A>
        <SearchBar />
        <FilterableList files={this.props.files}/>
      </div>
    )
  }
}


export default App;

