import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Header from '../Header';

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div>
            {/** TODO: Add the Drawer here */}
            <div>
                {/** TODO: Add the Header here */}
                <Header />
                <main className={classes.content}>
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
