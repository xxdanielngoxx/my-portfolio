import { Box, Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles'
import React from 'react'
import { Navbar } from './Navbar'

const useStyles = makeStyles((theme) => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato",
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    }
})(TextField);

export const Contact = () => {

    const classes = useStyles();

    return (
       <Box component="div" style={{height: "100vh", background: "#233"}}>
           <Navbar/>
           <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography 
                        variant="h5"
                        style={
                            {
                                color: "tomato",
                                textAlign: "center",
                                textTransform: "uppercase",
                            }
                        }
                    >
                        Hire Or Cantact To Me
                    </Typography>
                    <InputField
                        fullWidth="true"
                        label="Name"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{style: {color: "white"}}}
                    />
                    <br/>
                     <InputField
                        fullWidth="true"
                        label="Email"
                        variant="outlined"
                        inputProps={{style: {color: "white"}}}
                    />
                    <br/>
                    <InputField
                        fullWidth="true"
                        label="Company Name"
                        variant="outlined"
                        inputProps={{style: {color: "white"}}}
                    />
                    <Button
                        variant="outlined" 
                        fullWidth={true} 
                        endIcon={<Send/>}
                        className={classes.button}
                        >
                        Contat Me
                    </Button>
                </Box>
           </Grid>
       </Box>
    )
}
