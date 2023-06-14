// Referring to Activity 24 -> src -> App.js
import React, { useState } from 'react';
import PortfolioContainer from './components/PortfolioContainer'

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <PortfolioContainer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
};
export default App;