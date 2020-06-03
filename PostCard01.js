import React from 'react';
  import Avatar from '@material-ui/core/Avatar';
  import Card from '@material-ui/core/Card';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardContent from '@material-ui/core/CardContent';
  import CardActions from '@material-ui/core/CardActions';
  import { Link } from 'react-router-dom';
  import Typography from '@material-ui/core/Typography';
  import IconButton from '@material-ui/core/IconButton';
  import Icon from '@material-ui/core/Icon';
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid'
  import Box from '@material-ui/core/Box';


  const PostCard01 = () => (
    <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
     <Grid item>
      <Card className={'MuiPostCard--01'}>
        <CardMedia
         className={'MuiCardMedia-root'}
        >
         <div className={'MuiTag--ribbon'}>
            <Typography color='inherit' className={'MuiTypography-root'}>
              Port info
            </Typography>
         </div>
        </CardMedia>
        <CardContent className={'MuiCardContent-root'}>
            <Typography
             className={'MuiTypography--heading'}
             variant={'h6'}
             gutterBottom
             >
            WINS IP Port Info
            </Typography>
        </CardContent>
        <CardActions className={'MuiCardActions-root'}>
          <Button color={'primary'} fullWidth component={Link} to="/simple table">
           Find Out More
          </Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item>
       <Card className={'MuiPostCard--01'}>
         <CardMedia
          className={'MuiCardMedia-root'}
         >
          <div className={'MuiTag--ribbon'}>
             <Typography color={'inherit'} className={'MuiTypography-root'}>
               Fomi
             </Typography>
          </div>
         </CardMedia>
         <CardContent className={'MuiCardContent-root'}>
             <Typography
              className={'MuiTypography--heading'}
              variant={'h6'}
              gutterBottom
              >
              WINS Fomi Info
             </Typography>
         </CardContent>
         <CardActions className={'MuiCardActions-root'}>
           <Button color={'primary'} fullWidth  component={Link} to="/simple table">
            Find Out More
           </Button>
         </CardActions>
       </Card>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
      <Grid item>
      <Card className={'MuiPostCard--01'}>
        <CardMedia
          className={'MuiCardMedia-root'}
        >
          <div className={'MuiTag--ribbon'}>
            <Typography color={'inherit'} className={'MuiTypography-root'}>
              Region info
            </Typography>
          </div>
        </CardMedia>
        <CardContent className={'MuiCardContent-root'}>
            <Typography
             className={'MuiTypography--heading'}
             variant={'h6'}
             gutterBottom
             >
             WINS Region Info
            </Typography>
        </CardContent>
        <CardActions className={'MuiCardActions-root'}>
          <Button color={'primary'} fullWidth  component={Link} to="/simple table">
           Find Out More
          </Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item>
      <Card className={'MuiPostCard--01'}>
        <CardMedia
          className={'MuiCardMedia-root'}
        >
          <div className={'MuiTag--ribbon'}>
            <Typography color={'inherit'} className={'MuiTypography-root'}>
              Job info
            </Typography>
          </div>
        </CardMedia>
        <CardContent className={'MuiCardContent-root'}>
            <Typography
             className={'MuiTypography--heading'}
             variant={'h6'}
             gutterBottom
             >
             WINS Job Info
            </Typography>
        </CardContent>
        <CardActions className={'MuiCardActions-root'}>
          <Button color={'primary'} fullWidth  component={Link} to="/simple table">
           Find Out More
          </Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    </Grid>
  );

  export default PostCard01;
