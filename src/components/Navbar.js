import { AppBar, Box, Toolbar, Typography, IconButton, makeStyles, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Apps from '@material-ui/icons/Apps';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import avatar from '../avatar.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width: 250,
        height: "100%",
        background: "#BBDEFB"
    },
    avatar: {
        display: "block",
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: "0.5rem auto"
    },
    listItem: {
        color: "#212121",
    }
}));

const menuItems = [
    {
        listIcon: <HomeIcon />,
        listText: "Home",
        listPath: "/",
    },
    {
        listIcon: <AssignmentIndIcon />,
        listText: "Resume",
        listPath: "/resume",
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio",
    },
    {
        listIcon: <ContactMailIcon />,
        listText: "Contact",
        listPath: "/contact",
    },
];



export const Navbar = () => {

    const [state, setState] = useState({
        right: false,
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const classes = useStyles();

    const sideList = (slide) => {
        return (
            <Box 
                className={classes.menuSliderContainer} 
                component="div"
                onClick={toggleSlider(slide, false)}
            >
                <Avatar className={classes.avatar} src={avatar} alt="Daniel Ngo" />
                <Divider />
                <List>
                    {menuItems.map((item, key) => (
                        <ListItem key={key} button component={Link} to={item.listPath}>
                            <ListItemIcon className={classes.listItem}>
                                {item.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={item.listText} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
    };

    return (
        <div>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#1976D2" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBackRounded style={{ color: "#FFFFFF" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#FFFFFF" }}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider open={state.right} onClose={toggleSlider("right", false)} anchor="right">
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
