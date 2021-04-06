import React from 'react';

function Pagination({totalCoins , coinsPerPage , paginate}) {
    const pageNumbers = [];
    for (let i = 1 ; i <= Math.ceil(totalCoins / coinsPerPage) ; i++){
        pageNumbers.push(i);
    }
    return (
            <ul className="pagination">
                {pageNumbers.map(number =>
                    <li key={number} className="pagination-item">
                        <a onClick={() => paginate(number)} href="#">{number}</a>
                    </li>
                )}
            </ul>
    )
}

export default Pagination
