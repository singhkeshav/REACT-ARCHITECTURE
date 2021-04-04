import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Sidebar from '../../component/sidebar/sidebar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
    }),
);

export default function HomeDashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Sidebar  handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open}/>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                
            </main>
        </div>
    );
}
