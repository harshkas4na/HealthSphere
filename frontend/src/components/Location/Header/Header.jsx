import React from 'react'
import {Autocomplete} from "@react-google-maps/api";
import { AppBar,Toolbar,Typography,InputBase,Box } from '@mui/material';
// import {SearchIcon} from '@mui/icons-material';
import useStyles from './style';

const Header = () => {
    const Classes = useStyles();
  return (
    <AppBar position="static" color="default">
        <Toolbar className={ClassName.toolbar}>
            <Typography variant='h5' className={Classes.title}>
                HealthSphere
            </Typography>
            <Box display='flex'>
                <Typography variant='h6' className={Classes.title}>
                    Find a location
                </Typography>

                <Autocomplete>
                    <div className={Classes.search}>
                        <div className={Classes.searchIcon}>
                            {/* <SearchIcon/> */}
                        </div>
                        <InputBase placeholder='Search...' classes={{root:classes.inputRoot,input:classes.inputInput}} />
                    </div>
                </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header