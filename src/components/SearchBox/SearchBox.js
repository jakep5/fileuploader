import './SearchBox.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBox extends React.Component {
    render() {
        return (
            <div className = "SearchBox">
                <FontAwesomeIcon icon = {faSearch} />
                <input 
                    placeholder="Search term" 
                    value={this.props.searchTerm}
                    onChange={e => this.props.updateSearchTerm(e.target.value)}>
                    </input>
            </div>
        )
    }
}

export default SearchBox