import React from 'react'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './sidebar.style';
import { withRouter } from 'react-router';

const Sidebar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    let open = props.open;
    let history = props.history;
    // 'Inbox', 'Starred', 'Send email', 'Drafts'
    let sidBarColumns = [
        {
            key: 'inbox',
            route: 'dashboard',
            routeText: "Inbox"
        },
        {
            key: 'starred',
            route: 'dashboard/starred',
            routeText: "Starred"
        },
        {
            key: 'send_email',
            route: 'dashboard/send-email',
            routeText: "Send email"
        },
        {
            key: 'all_mail',
            route: 'dashboard/all-mails',
            routeText: "All mail"
        },
        {
            key: 'trash',
            route: 'dashboard/trash',
            routeText: "Trash"
        },
        {
            key: 'spam',
            route: 'dashboard/spam',
            routeText: "Spam"
        },
        {
            key: 'form',
            route: 'dashboard/form',
            routeText: "Form"
        }
    ]
    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List>
                    {sidBarColumns.map((row, index) => (
                        <React.Fragment key={row.key}>
                            <ListItem button  onClick={() => history.push(`/${row.route}`)}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={row.routeText} />
                            </ListItem>
                            {
                                index === 2 ? <Divider /> : ''
                            }

                        </React.Fragment>
                    ))}
                </List>
                <Divider />

            </Drawer>
        </>
    )
}


export default withRouter(Sidebar);