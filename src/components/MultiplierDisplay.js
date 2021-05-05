import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

function MultiplierDisplay(props){

    return(<Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Grid item xs={3}>
          <Paper className={props.classes.paper}><div>Field: {props.buildings.fields.value}<IconButton size='small'
              onClick={() => {
                props.handleBuyItem(props.buildings.fields);
              }}
            >
              <AddIcon style={{fontSize:'15px'}}/>
            </IconButton>
            <Paper className={props.classes.paperSmall}>Multiplier {props.buildings.fields.multiplierDisplay}   Cost:{}           
            </Paper> 
           
           </div> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Forest: {props.buildings.fields.value}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Outcrop: {props.buildings.fields.value}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Prospect: {props.buildings.fields.value}</Paper>
        </Grid>
        </Grid>)
}
export default MultiplierDisplay;