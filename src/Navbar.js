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
        color: 'blue'
    },
    navb :{

        color: 'blue'



    },
    app :{

        backgroundColor: 'black'



    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.app}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Shoe-Store App
          </Typography>
                    <Button color='inherit'>  <Link to='/' className={classes.navb}> Home </Link> </Button>
                    <Button color='inherit'>   <Link to='/about'className={classes.navb} > About </Link></Button>
                    <Button color='inherit'>   <Link to='/product' className={classes.navb}> Product </Link> </Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}
