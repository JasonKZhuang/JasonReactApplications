import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
    return (
        <div>
            <input type="text" placeholder="Search"></input>
            <div style={{ color: '#fff', cursor:'pointer'}}>
                <AiOutlineSearch size={24} />
            </div>
        </div>
    )
}

export default Search
