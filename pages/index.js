import Head from 'next/head';
import React from 'react';
import { Radar } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';;
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
}));



const data = {
  labels: ['エネルギー', 'タンパク質', '脂質', '糖質', '食物繊維', '食塩相当量', 'ビタミンE'],
  datasets: [
    {
      label: 'カロリーメイト',
      backgroundColor: 'rgba(255,183,0,0.2)',
      borderColor: '#ffb700',
      pointBackgroundColor: 'rgba(255,183,0,0.2)',
      pointBorderColor: '#ffb700',
      pointHoverBackgroundColor: '#ffb700',
      pointHoverBorderColor: 'rgba(255,183,0,0.2)',
      data: [200 / 883.3, 4 / 20, 10.95 / 24.5, 20.85 / 127, 1 / 6.6, 0.355 / 2.67, 1.6 / 2.17]
    },
    {
      label: 'ケロッグ　フルグラ',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [170 / 883.3, 3 / 20, 4.6 / 24.5, 28.3 / 127, 1.7 / 6.6, 0.3 / 2.67, 2.4 / 2.17]
    },
    {
      label: '日本人食事摂取基準',
      backgroundColor: 'rgba(55,55,55,0.2)',
      borderColor: 'rgba(55,55,55,1)',
      pointBackgroundColor: 'rgba(55,55,55,0.2)',
      pointBorderColor: 'rgba(55,55,55,1)',
      pointHoverBackgroundColor: 'rgba(55,55,55,1)',
      pointHoverBorderColor: 'rgba(55,55,55,0.2)',
      data: [1, 1, 1, 1, 1, 1, 1]
    }
  ]
};

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className="container">
      <Head>
        <title>朝ごはん栄養比べ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            朝ごはん栄養くらべ
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['メールボックス(開発中)', 'メール（送れない）'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main>
        <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
          style={{ backgroundColor: 'teal' }}
        >
          <Grid item style={{ backgroundColor: 'white' }}>
            <h2>開発中</h2>
          </Grid>
          <Grid item style={{ backgroundColor: 'white' }}>
            <div>
              <Radar data={data} />
            </div>
          </Grid>
        </Grid>
        <Grid item style={{ backgroundColor: 'white' }}>
          <h2>開発中</h2>
        </Grid>
      </main>
    </div>
  )
}
