import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, FormControlLabel } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
    toolBar: {
        background: '#1CBA1C'
    },
    toolBarToggled:{
        background: '#FF1F5E'
    },
    title: {
        flexGrow: 1,
        color: "#FFFFFF"
    }
}))
export default function Header(props) {
    const classes = useStyle()
    return (
        <AppBar>
            <Toolbar className={clsx(classes.toolBar,{
                [classes.toolBarToggled]:props.checked
            })}>
                <Typography variant="h6" className={classes.title}>
                    {!props.checked?"Flora Army":"Fauna Army"}
                </Typography>
                <FormControlLabel
                    control={<Switch/>}
                    label="Change Army"
                    labelPlacement="start"
                    checked={props.checked} 
                    onChange={props.toggleChecked}
                />

            </Toolbar>

        </AppBar>
    )
}
Header.propTypes = {
    checked: PropTypes.bool.isRequired,
    toggleChecked: PropTypes.func.isRequired
}