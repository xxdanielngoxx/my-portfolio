import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Navbar } from './Navbar';
import projectSettingTextImage from '../images/setting-text.png';
import portfolioImage from '../images/portfolio.png';
import todoListBasicImage from '../images/todo-list-basic.png';
import todoListReduxImage from '../images/todo-list-redux.png';
import manageProducts from '../images/manage-products.png';
import ecom from '../images/ecom.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
}));

const projects = [
  {
    name: 'Ecommerce Shop',
    image: ecom,
    description:
      'I create this project for improve my knowledge about reactjs and redux, and learn how to combine them together in real world project',
    linkSource: 'https://github.com/xxdanielngoxx/proshop.git',
    linkDemo: 'https://myecomshopapp.herokuapp.com/',
  },
  {
    name: 'Manage Products',
    image: manageProducts,
    description:
      'Manage Products, this project is made by ReactJs, Redux, React Router, call API using axios',
    linkSource: 'https://github.com/xxdanielngoxx/manage-products',
    linkDemo: 'https://manage-products-ef6e8.web.app/product-list',
  },
  {
    name: 'Portfolio',
    image: portfolioImage,
    description: 'This is simple project to learing ReactJs',
    linkSource: 'https://github.com/xxdanielngoxx/my-portfolio',
    linkDemo: 'https://my-portfolio-24353.web.app',
  },
  {
    name: 'Todo List Redux',
    image: todoListReduxImage,
    description: 'Todo List Redux, this project is made by ReactJs, Redux',
    linkSource: 'https://github.com/xxdanielngoxx/todo-list-redux',
    linkDemo: 'https://todo-list-redux-54e5c.web.app/',
  },
  {
    name: 'Todo List Basic',
    image: todoListBasicImage,
    description: 'Todo List Basic, this project is made by ReactJs',
    linkSource: 'https://github.com/xxdanielngoxx/todo-list-basic',
    linkDemo: 'https://todo-list-basic.web.app/',
  },
  {
    name: 'Setting Text',
    image: projectSettingTextImage,
    description: 'This is simple project for learning basic about ReactJs',
    linkSource: 'https://github.com/xxdanielngoxx/setting-text',
    linkDemo: 'https://setting-text.web.app/',
  },
];

export const Portfolio = () => {
  const classes = useStyles();

  const projectElements = () => {
    return projects.map((project, index) => {
      return (
        <Grid item xs={12} sm={8} md={6} key={index}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt={project.name}
                height='140'
                image={project.image}
              />
              <CardContent>
                <Typography variant='h5'>{project.name}</Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href={project.linkSource}
                  style={{
                    textDecoration: 'none',
                    padding: '10px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    marginRight: '70px',
                  }}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Source
                </a>
                <a
                  href={project.linkDemo}
                  style={{
                    textDecoration: 'none',
                    padding: '10px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    marginLeft: '70px',
                  }}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Live Demo
                </a>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Box component='div' className={classes.mainContainer}>
      <Navbar />
      <Grid container justify='center'>
        {projectElements()}
      </Grid>
    </Box>
  );
};
