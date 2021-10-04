import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Layout = ({ children }) => {
    return (
        <div>
            {/** TODO: Add the Drawer here */}
            <div>
                {/** TODO: Add the Header here */}
                <Header />
                <main>
                    <div>

                    </div>
                    <div style={{
                        display: 'flex',
                        flex: '1',
                        positionL: 'relative',
                        overflow: 'hidden',
                    }}>
                        { children }
                    </div>
                </main>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
