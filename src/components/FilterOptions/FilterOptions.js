import './FilterOptions.css';
import React from 'react'

class FilterOptions extends React.Component {
    render() {
        return (
            <div className="FilterOptions">
                <div className="FilterOptions__option">
                    <label htmlFor="filter_all">
                        <input type="radio" value="All" id="filter_all" name="filter"></input>
                            All
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_uploaded">
                        <input type="radio" value="Uploaded" id="filter_uploaded" name="filter"/>
                        Uploaded
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_synched">
                        <input type="radio" value="Synced" id="filter_synced" name="filter"/>
                        Synched
                    </label>
                </div>
                <div className="FilterOptions__option">  
                    <label htmlFor="filter_new">
                        <input type="radio" value="New" id="filter_new" name="filter"/>
                        New
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions;