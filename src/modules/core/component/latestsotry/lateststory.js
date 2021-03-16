import { Grid, Typography } from '@material-ui/core';
import React from 'react'

const Lateststory = () => {
    return (
        <div style={{ margin: '30px 10px 0px 5px' }}>
            <Typography variant="inherit" style={{textAlign: 'center',fontFamily: 'fantasy'}}>Test Text</Typography>
            <Grid container justify="space-between" alignItems="stretch">
                <Grid item xs={12} sm={6} md={6} lg={6} >A</Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}  >B</Grid>
            </Grid>
        </div>
    )
}

export default Lateststory;