import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchInput}) => {
    return(
        <div className = 'ma3'>
            <input
                className = 'pa3 ba br3 bg-lightest-blue'
                type = 'search'
                placeholder = 'search robots'
                onChange = {searchInput}

            />
        </div>
        )
}

export default SearchBox;