import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function WorkerCard(props)
{
    return(
    <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.worker);
        }}
      >
        <Paper className={props.worker.cardStyle.current}>
          <div className={props.classes.transBox}>
          {props.worker.name}: {props.worker.value}
          <div style={{ fontSize: "x-small" }}>
              Total income: {props.worker.displayIncome}
              <br></br> Cost: {props.worker.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>)
}

export default WorkerCard;