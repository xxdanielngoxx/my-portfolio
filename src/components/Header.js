import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Typed from 'react-typed';
import avatar from '../avatar.jpg';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: theme.spacing(15),
        width: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "#FF9800",
    },
    subtitle: {
        color: "#BBDEFB",
        marginBottom: "3rem",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

export const Header = () => {

    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Daniel Ngo" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Daniel Ngo"]} typeSpeed={40} />
            </Typography>
            <Typography className={classes.subtitle} variant="h4">
                <Typed
                    strings={["Java Developer", "Springboot", "ReactJs"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    );
}
