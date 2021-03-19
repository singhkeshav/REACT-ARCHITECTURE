import React,{memo} from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() =>
    createStyles({
        backdrop: {
            zIndex: 9999999999,
            color: '#fff',
        },
    }),
);

const Loader = () => {
    const classes = useStyles();
    const { isLoading } = useSelector(state => state.common);
    return (
        <Backdrop className={classes.backdrop} open={isLoading} >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
export default memo(Loader);