import React from "react";
import './PostPagination.style.css';


export function PostPagination({postCount, rowCount, paginate}) {
    let pageNumbers = [];
    for(let i = 1; i <= (postCount/rowCount); i++) {
        pageNumbers.push(i);
    }
    
    return (
       <nav>
        <ul className="pagination center">
            {
                pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
                    </li>
                ))
            }
        </ul>
       </nav>
    )
}