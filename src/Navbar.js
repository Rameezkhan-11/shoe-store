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
        backgroundColor: 'black'
                
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'white'
        
    },
    navb:{

        backgroundColor: 'black'

    }
   
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navb}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Shoe-Store
          </Typography>
                    <Button>  <Link to='/' style={{color: 'white'}}> Home </Link> </Button>
                    <Button>   <Link to='/product' style={{color: 'white'}}> Product </Link> </Button>
                    <Button>   <Link to='/about' style={{color: 'white'}}> About </Link></Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}
