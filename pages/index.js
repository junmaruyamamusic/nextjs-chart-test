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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  input: {
    height: 40
  },
  button: {
    height: 40
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const data = {
  labels: ['エネルギー', 'タンパク質', '脂質', '糖質', '食物繊維', '食塩相当量', 'ビタミンE'],
  datasets: [
    {
      label: '焼き肉定食',
      backgroundColor: 'rgba(255,183,0,0.2)',
      borderColor: '#ffb700',
      pointBackgroundColor: 'rgba(255,183,0,0.2)',
      pointBorderColor: '#ffb700',
      pointHoverBackgroundColor: '#ffb700',
      pointHoverBorderColor: 'rgba(255,183,0,0.2)',
      data: [200 / 883.3, 4 / 20, 10.95 / 24.5, 20.85 / 127, 1 / 6.6, 0.355 / 2.67, 1.6 / 2.17]
    },
    {
      label: 'からあげ定食',
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

//  <Head>
//    <title>朝ごはん栄養比べ</title>
//    <link rel="icon" href="/favicon.ico" />
//  </Head>


  return (
    <div className={classes.root}>
      <main>
      <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      やよい軒最強プロテインメニュー検索
    </Typography>
  </Toolbar>
</AppBar>
        <Typography paragraph>
        <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <TextField
        InputProps={{
              className: classes.input
            }}
        InputLabelProps={{
              shrink: true
            }}
        id="bugetField"
        label="予算"
        variant="filled"
        color="secondary"/>
        <Button variant="contained" color="primary" className={classes.button} size="large">
        検索
        </Button>
        </Paper>
      </Grid>
      <Grid item xs={6}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../public/684s.jpg"
          title="Contemplative Reptile"
        />
        <img src="/684s.jpg" alt="Vercel Logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            焼き肉定食
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            タンパク質：　xx g　脂質　yy g 炭水化物 zz g
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
        <Radar data={data} />
        </Paper>
      </Grid>
    </Grid>
        </Typography>
      </main>
    </div>
  )
}
