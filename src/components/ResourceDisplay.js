import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';

function ResourceDisplay(props)
{
    //function displayResource, generates display string for resources

    return(
      <div style={{padding:20,
        overflowX:'hidden'}}>
    <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper className={props.classes.foodCard} style={{backgroundColor:"Wheat"}}>Food: {props.resources.food.value}
          <div style={{ fontSize: "x-small" }}>
                      Total income {props.resources.food.income}
                    </div></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.woodCard} style={{backgroundColor:"BurlyWood"}}>Wood: {props.resources.wood.value}
          <div style={{ fontSize: "x-small" }}>
                      Total income {props.resources.wood.income}
                    </div></Paper>
                   
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.stoneCard}>Stone: {props.resources.stone.value}
          <div style={{ fontSize: "x-small" }}>
                      Total income {props.resources.stone.income}
                    </div></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.metalCard}>Metal: {props.resources.metal.value}
          <div style={{ fontSize: "x-small" }}>
                      Total income {props.resources.metal.income}
                    </div></Paper>  
        </Grid>
      </Grid>
      </div>)
}

export default ResourceDisplay;