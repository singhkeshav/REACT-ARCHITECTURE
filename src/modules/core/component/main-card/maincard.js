import React, { useEffect, useState } from 'react';
// import useStyles from './maincard.style'
import Card from '../card/card'
import { Grid } from '@material-ui/core';
import service from '../../shared/service/index'
const Maincard = () => {
  let [images, setImages] = useState();
  //Use Effect...
  useEffect(() => {
    service.getPhotos().then(res => {
      if (res && res['status'] === 200) {
        setImages(res['data']);
      }
    }).catch(ex => {
  
    })
  }, [])
 // const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="stretch">
      {
        (images && images.length) ?
          images.map((row, key) => {
            return <Card key={key} {...row} />
          })
          : 'Loading...'
      }

    </Grid>
  )
}


export default Maincard;