import {  CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './card.style';

const Card = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} sm={6} md={2} lg={2} className={classes.cardItem} >
                <Typography variant="h6" gutterBottom>
                   {props.title}
                </Typography>
            </Grid>

        </>
    )
}


export default Card;