import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core';
import { GetUsers } from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles((theme) =>
    createStyles({
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        }
    }),
);
const Inbox = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector(state => state.user.users);
    //>>Use Effect...
    let getUserData = (array = null) => {
        dispatch(GetUsers(array));
    }
     // eslint-disable-next-line
    useEffect(() => {
        getUserData();
        return () => {
            getUserData([]);
        }
    }, [])

    const navigateTo = () => {
        history.push('/login')
    }
    return (
        <>

            <div className={classes.drawerHeader} />
            {
                users.length > 0 ?
                    users.map((row, index) => {
                        return (<Typography paragraph key={index}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                            <button onClick={() => navigateTo()}>Login</button>
                        </Typography>)
                    })
                    : <>Loading...</>
            }

        </>
    )
}

export default Inbox;