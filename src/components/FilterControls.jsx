import React from 'react'

const FilterControls= ({filters,dispatch})=>{
    return(
        <div>
            <select 
            value={filters.status}
            onChange={(e)=>dispatch({type:"SET_STATUS", payload: e.target.value})}
            >
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
            </select>
           
        </div>
    )
}

export default FilterControls