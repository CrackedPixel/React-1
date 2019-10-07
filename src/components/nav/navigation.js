import React from 'react';

function Navigation() {
    return (
        <div className="navbar">
            <a href="#" className="navbar__item navbar__item--home">Home</a>
            <i className="fa fa-chevron-right fa-lg navbar__icon"></i><a href="#" className="navbar__item">Websites</a>
            <i className="fa fa-chevron-right fa-lg navbar__icon"></i><a href="#" className="navbar__item navbar__item--active">New Team</a>
        </div>
    );
}

export default Navigation;