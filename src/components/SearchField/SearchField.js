import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DirectionsIcon from '@material-ui/icons/Directions';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '99%',
    borderRadius: 20,
    border: '1px solid #f2f5f6',
    [theme.breakpoints.down('sm')]: {
      width:'auto',
    }, 
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
    color:'#8f8f9c'
  },
  searchFieldText: {
      fontSize:10,
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Box component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
      <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <NotificationsIcon />
      </IconButton>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <MailOutlineIcon />
      </IconButton>
      <span className={classes.searchFieldText}>Hey, Theoderic </span>
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Box>
  );
}
