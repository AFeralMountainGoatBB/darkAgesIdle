import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function MultiplierDisplay(props) {
  return (
    <div style={{padding:20,
    overflowX:'hidden'}}>
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.buildings.fields);
        }}
      >
        <Paper className={props.classes.foodResourceCard}>
          <div>
            Field: {props.buildings.fields.value}
            <div style={{ fontSize: "x-small" }}>
              Total multiplier {props.buildings.fields.multiplierDisplay}
              <br></br> Cost: {props.buildings.fields.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.buildings.forests);
        }}
      >
        <Paper className={props.classes.woodResourceCard}>
          <div>
            Forest: {props.buildings.forests.value}
            <div style={{ fontSize: "x-small" }}>
              Total multiplier {props.buildings.forests.multiplierDisplay}
              <br></br> Cost: {props.buildings.forests.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.buildings.outcrops);
        }}
      >
        <Paper className={props.classes.stoneResourceCard}>
          <div>
            Outcrop: {props.buildings.outcrops.value}
            <div style={{ fontSize: "x-small" }}>
              Total multiplier {props.buildings.outcrops.multiplierDisplay}
              <br></br> Cost: {props.buildings.outcrops.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.buildings.prospects);
        }}
      >
        <Paper className={props.classes.metalResourceCard}>
          <div>
            Prospect: {props.buildings.prospects.value}
            <div style={{ fontSize: "x-small" }}>
              Total multiplier {props.buildings.prospects.multiplierDisplay}
              <br></br> Cost: {props.buildings.prospects.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}
export default MultiplierDisplay;
