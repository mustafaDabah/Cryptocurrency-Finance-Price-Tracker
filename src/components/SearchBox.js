import React from 'react';

function SearchBox({handleChange , search}) {
    
    return (
        <div className="coin-search">
           <h1 className="coin-text">search a currency</h1>
           <form>
             <input type='text' placeholder='search the currency' className='coin-input' onChange={handleChange} value={search} />
           </form>
        </div>
    )
}

export default SearchBox
