import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function MultiplierCard(props)
{
    return(
    <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.building);
        }}
      >
        <Paper className={props.building.cardStyle.current}>
          <div className={props.classes.transBox}>
          {props.building.name}: {props.building.value}
          <div style={{ fontSize: "x-small" }}>
              Total Multiplier: {props.building.multiplierDisplay}
              <br></br> Cost: {props.building.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>)
}

export default MultiplierCard;