import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}
const drawerWidth = 140;
const useStyles = makeStyles((theme) => ({
  root: {
   flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: '20px'
  },
  button: {
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px"
  },
  tab: {
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "1rem",
  minWidth: 10,
  marginLeft: "25px"
  },
  toolbarMargin: {
  ...theme.mixins.toolbar,
  marginBottom: "1em"
 },
 drawerIconContainer: {
   marginRight: "auto",
 },
 drawerItem: {
   color: "white"
 },
 iconbutton: {
   color: "white"
 },
 drawer: {
   position: 'fixed',
   top: '72px',
   backgroundColor: '#3D6289'
 },
 appbar: {
   zIndex: theme.zIndex.drawer + 1,
   backgroundColor: '#254A70'
 },
 toolbar: {
   ...theme.mixins.toolbar
 }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [value, setValue] = useState(0);


  const handleChange = (e,value) => {
    setValue(value)
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
       setValue(0);
    }
    if (window.location.pathname === "/Home" && value !== 1) {
       setValue(1);
    }
    if (window.location.pathname === "/Memo Delete" && value !== 2) {
       setValue(2);
    }

  }, [value]);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);



  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(true);
    setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="#b0bec5"
      >
      <Tab className={classes.tab} component={Link} to="/Home" label="Home" />
      <Tab className={classes.tab} component={Link} to="/Memo Delete" label="Memo Delete" />
      <Button color="inherit" className={classes.button}>Login</Button>
      </Tabs>

    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.iconbutton}>
      <MenuIcon />
      </IconButton>
      <Drawer disableBackdropTransition={!iOS}
      disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
      classes={{paper: classes.drawer}}
      variant={'persistent'}
      >
       <List>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/Home">
            <ListItemText className={classes.drawerItem}>Home</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/Memo Delete">
            <ListItemText className={classes.drawerItem}>Memo Delete</ListItemText>
          </ListItem>
       </List>
      </Drawer>
      </React.Fragment>
  )
  return (
    <React.Fragment>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar disableGutters>
               {matches ? drawer : drawer}
              <Typography variant="h6" className={classes.title} noWrap>
               WINSAPPS
              </Typography>
            <Button color="inherit" className={classes.button}>Login</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>

  );

}
