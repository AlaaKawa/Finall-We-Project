import React from 'react'

//importing Navbar components

import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu,Typography} from '@mui/material'

import {ShoppingCart} from '@mui/icons-material'
import { ClassNames } from '@emotion/react'

//import flower logo
import logo from '../../assets/flower_logo.png'

//import styles for navbar
import useStyles from './Styles'
const Navbar = () => {
    const classes=useStyles();

    
  return (
    <>
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography variant='h6' className={classes.title} color='inherit'>
                <img src={logo} alt='Flower Shop' height='25px' className={classes.image} />
                Flower Shop
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.button}>
                <IconButton aria-label='show cart items' color='inherit'>
                    <Badge badgeContent={2} color='secondary'>
                        
                        <ShoppingCart/>

                    </Badge>

                </IconButton>

            </div>
        </Toolbar>

    </AppBar>
    </>
  )
}

export default Navbar