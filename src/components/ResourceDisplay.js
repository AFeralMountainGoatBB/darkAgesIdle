import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';

function ResourceDisplay(props)
{
    //function displayResource, generates display string for resources
    function displayResource(resource)
    {
      return ((Math.round(resource.value * 100) / 100).toFixed(2));
    }

    return(
    <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Food: {props.resources.food.value}</Paper>
          <Paper className={props.classes.paperSmall}>{props.resources.food.income}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Wood: {props.resources.wood.value}</Paper>
          <Paper className={props.classes.paperSmall}>{props.resources.wood.income}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Stone: {props.resources.stone.value}</Paper>
          <Paper className={props.classes.paperSmall}>{props.resources.stone.income}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Metal: {props.resources.metal.value}</Paper>
          <Paper className={props.classes.paperSmall}>{props.resources.metal.income}</Paper>
        </Grid>
      </Grid>)
}

export default ResourceDisplay;