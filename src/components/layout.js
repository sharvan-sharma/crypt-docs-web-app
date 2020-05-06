/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useDarkMode from 'use-dark-mode'
import DocsDrawer from './Drawer'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useStaticQuery, graphql,Link } from "gatsby"
import 'jquery/src/jquery'
import 'popper.js/dist/popper'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import "./layout.css"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor:'rgba(0,0,0,0.85)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  codeArea:{
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    width:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color:'inherit'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const hr = (new Date()).getHours()
  const flag = (hr < 6 || hr > 19)?true:false

  const darkMode = useDarkMode(flag,{ classNameDark:'dark-mode' ,classNameLight:'light-mode'});

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <div className='d-flex'> 
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link to='/' className='text-decoration-none text-white'>{data.site.siteMetadata.title}</Link>
          </Typography>
          <div className='ml-auto d-flex'>
              <IconButton onClick={darkMode.disable}>
                <WbSunnyIcon className='text-white'/>
              </IconButton>
              <IconButton onClick={darkMode.enable}>
                <Brightness2Icon className='text-white'/>
              </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
              <DocsDrawer/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
              <DocsDrawer/>
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.codeArea}>
        <div className='p-4'>
        <div className={classes.toolbar} />
        <Fade in={true}><div>{props.children}</div></Fade>
        <footer>
          © {new Date().getFullYear()} | <span><b>C</b></span><span>ry</span><sapn><b>P</b></sapn><span>t</span>, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
      </div>
    </div>
  );
}





Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
