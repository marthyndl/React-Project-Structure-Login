import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Componente(props) {
    const {
        email,
        password,
        onChangeCampo,
        onLogin
    } = props;

    return (
        <React.Fragment>
            <TextField 
                label='Email'
                fullWidth
                value={email}
                onChange={e => onChangeCampo('email', e.target.value)}
            />

            <TextField 
                label='Password'
                fullWidth
                value={password}
                onChange={e => onChangeCampo('password', e.target.value)}
            />

            <br />
            <br />
            
            <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={onLogin}
            >
                Login
            </Button>
        </React.Fragment>
    )
}

export default Componente;