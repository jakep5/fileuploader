import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';
import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className = "SearchBar">
                <div className = "SearchBar__heading">
                    <h1>File Uploader</h1>
                </div>
                <div className="SearchBar__controls">
                    <SearchBox searchTerm = {this.props.searchTerm} updateSearchTerm = {this.props.updateSearchTerm}/>
                    <FilterOptions filterOption = {this.props.filterOption}/>
                </div>
            </div>
        )
    }
}

export default SearchBar;