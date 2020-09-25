import { Box, makeStyles, Typography, } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Navbar } from './Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import 'react-vertical-timeline-component/style.min.css';

const userStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#BBDEFB",
    },   
}));

export const Resume = () => {

    const classes = userStyles();

    return (
        <Fragment>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="9/2019 - 3/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">DXC</h4>
                            <p>
                                Support team fixbugs and develop company's projects.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="3/2019 - 7/2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Java Intership</h3>
                            <h4 className="vertical-timeline-element-subtitle">Zamo Tech</h4>
                            <p>
                                Support team to develop and fixbugs for my company's project. Using Spring Framework and other technologies to develop API.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2016 - 2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Learning Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ton Duc Thang University</h4>
                            <p>
                                Learning basic knowledge about comuputer science. Especially, interesting about Object Oriented Programming and technologies related to web development.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                </Box>
            </Box>
        </Fragment>
    )
}