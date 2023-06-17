// Referring to Activity 24 -> src -> components -> NavTabs.js
import React from 'react';
import '../styles/Navbar.css';

// renders navigation tabs for different pages
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a
                    href='#about'
                    // on click, handlePageChange() will be called to navigate user to the corresponding page
                    onClick={() => handlePageChange('About')}
                    // if current page is 'About', navigation tab will be highlighted, otherwise it will not be highlighted 
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;