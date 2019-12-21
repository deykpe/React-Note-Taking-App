import React from 'react';

function Header() {

    const currentYear = new Date().getFullYear();
    return <p>
        Copyright {currentYear}
    </p>
}

export default Header;