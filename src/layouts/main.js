import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Main(props) {
    const { children } = props;

    return (
        <React.Fragment>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        color='inherit'
                    >
                        Bienvenido !!!
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={{padding: '2rem'}}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Main;