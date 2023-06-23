// Referring to Activity 22 -> src -> components -> Header.js
import React from 'react';
import NavTabs from './NavTabs';
import starImage from '../assets/images/stars.jpg'

const styles = {
    headerStyle: {
        backgroundColor: 'black',
        backgroundImage: `url(${starImage})`,
        padding: '30px'
    },
    headingStyle: {
        fontSize: '50px',
        color: 'white',
        textAlign: 'center'
    },
}

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header style={styles.headerStyle}>
            <h1 style={styles.headingStyle} >Julia Hany's Portfolio</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}