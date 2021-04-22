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
          <Paper className={props.classes.paper}>Field: {props.field.value}</Paper>
          <IconButton
              onClick={() => {
                props.handleBuyItem(props.field, props.setfield);
              }}
            >
              <AddIcon />
            </IconButton>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Forest: {props.forest.value}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Outcrop: {props.outcrop.value}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={props.classes.paper}>Prospect: {props.prospect.value}</Paper>
        </Grid>
        </Grid>)
}
export default MultiplierDisplay;