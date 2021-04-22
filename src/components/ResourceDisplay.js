import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';

function ResourceDisplay(props)
{
    return(
    <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Food: {props.food}</Paper>
          <Paper className={props.classes.paperSmall}>{props.foodrate}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Wood: {props.wood}</Paper>
          <Paper className={props.classes.paperSmall}>{props.woodrate}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Stone: {props.stone}</Paper>
          <Paper className={props.classes.paperSmall}>{props.stonerate}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Metal: {props.metal}</Paper>
          <Paper className={props.classes.paperSmall}>{props.metalrate}</Paper>
        </Grid>
      </Grid>)
}

export default ResourceDisplay;