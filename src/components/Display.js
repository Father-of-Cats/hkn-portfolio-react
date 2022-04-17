import React, { useState } from 'react'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Header from './Header'
import '../App.css'

function Display() {
    const [currentPage, setCurrentPage] = useState('About')
    
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                console.log('default switch')
        }
    };

const pageChanger = (page) => setCurrentPage(page);

return (
    <div>
        <Header currentPage={currentPage} pageChanger={pageChanger} />
        {renderPage()}
    </div>
    );
}

export default Display