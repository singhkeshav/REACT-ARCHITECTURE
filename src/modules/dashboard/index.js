
import React, { lazy, Suspense,useEffect } from "react";
import {
    Switch,
    useHistory,
    useRouteMatch,
    withRouter
} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import LogedIn from '../../shared/auth/LogedIn';

const DashboardLayoutRoute = lazy(() => import('../../shared/layout/dashboard.layout'));
const Starred = lazy(() => import('../dashboard/component/starred/starred'));
const Trash = lazy(() => import('../dashboard/component/trash/trash'));
const Spam = lazy(() => import('../dashboard/component/spam/spam'));
const Allmail = lazy(() => import('../dashboard/component/spam/spam'));
const Form = lazy(() => import('../dashboard/component/forms/form'));
const Inbox = lazy(() => import('../dashboard/component/inbox/inbox'));
const Sidebar = lazy(() => import('../dashboard/component/sidebar/sidebar'));
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

const DashboardModules = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const isUserLogin = LogedIn.isAuthenticate;
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const {url} =  useRouteMatch();
    // eslint-disable-next-line
    useEffect(() => {
        if(!isUserLogin){
            history.push('/login')
        }
        return () => {        
        }
    }, [isUserLogin])
  
    return (
        <div className={classes.root}>

            <Suspense fallback={<p>Loading...</p>}>
             
                    <Sidebar handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open} />
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <Switch>
                            <DashboardLayoutRoute path={url}  exact={true}  component={Inbox}/>
                            <DashboardLayoutRoute path={`${url}/inbox`} component={Inbox} exact={true} />
                            <DashboardLayoutRoute path={`${url}/starred`} component={Starred} exact={true} />
                            <DashboardLayoutRoute path={`${url}/send-email`} component={Allmail} exact={true} />
                            <DashboardLayoutRoute path={`${url}/all-mails`} component={Allmail} exact={true} />
                            <DashboardLayoutRoute path={`${url}/trash`} component={Trash} exact={true} />
                            <DashboardLayoutRoute path={`${url}/spam`} component={Spam} exact={true} />
                            <DashboardLayoutRoute path={`${url}/form`} component={Form} exact={true} />
                        </Switch>
                    </main>
             
            </Suspense>


        </div>


    )
}
export default withRouter(DashboardModules);