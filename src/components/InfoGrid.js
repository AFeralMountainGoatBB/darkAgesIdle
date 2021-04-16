import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoGrid(value1, value2, value3, function1) {
  const classes = useStyles();

  console.log("value1", value1);
  console.log("value1", value1.value1);
  

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
        <Paper className={classes.paper}>item {value1.value1}<IconButton onClick={() => { value1 = value1+1 }}><AddIcon/></IconButton></Paper>
        </Grid>
        <Grid item xs={3}>
        {/* <Paper className={classes.paper}>itemTwo {value2}</Paper> */}
        </Grid>
        <Grid item xs={3}>
        {/* <Paper className={classes.paper}>itemThree {value3}</Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}