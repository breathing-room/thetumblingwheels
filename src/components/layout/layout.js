import React from 'react';
import * as layoutStyles from './layout.module.scss'
import Nav from '../nav';

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div className={layoutStyles.container}>
                {children}
            </div>
        </div>
    )
}

export default Layout;