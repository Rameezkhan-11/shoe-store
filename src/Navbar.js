import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
                
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        
        
    },
    
   
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" style={{backgroundColor: 'red', color: 'white'}}>
                <Toolbar className={classes.tool}>

                    <Typography variant="h6" className={classes.title}>
                     <Link to='/' style={{color: 'black'}}>   Shoe-Store </Link>
          </Typography>
                    <Button> <Link to='/' style={{color: 'black'}}> Home </Link> </Button>
                    <Button> <Link to='/product' style={{color: 'black'}}> Product </Link> </Button>
                    <Button> <Link to='/about' style={{color: 'black'}}> About </Link></Button>


                </Toolbar>
            </AppBar>
        </>
    );
}
