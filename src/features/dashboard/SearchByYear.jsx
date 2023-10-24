import React, { useState } from "react";
import useDebounce from "../../utilities/UseDebounce.jsx"


const SearchByYear = ({ value, onChange }) => {
    const [filterYear, setFilterYear] = useState(value);
    const debouncedChange = useDebounce(onChange, 200);

    function handleChange(event) {
        setFilterYear(event.target.value);
    }

    function handleSearchButton(event) {
        debouncedChange(filterYear);
    }
    
    return (
        <div className="search-container">
            <input
                placeholder="Search by year"
                type="number"
                value={filterYear}
                onChange={handleChange}
            />
            <button onClick={handleSearchButton}>🔍︎</button>
        </div>
    )
};


export default SearchByYear;