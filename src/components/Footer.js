import React from 'react';

function Header() {

    const currentYear = new Date().getFullYear();
    return (
    <footer>
    <p>Copyright {currentYear}</p>
    </footer>
    )
}

export default Header;