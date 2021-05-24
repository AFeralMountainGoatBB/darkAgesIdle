import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function WorkerCard(props)
{
    return(
    <Grid
        item
        xs={3}
        onClick={() => {
          props.handleBuyItem(props.item);
        }}
      >
        <Paper className={props.item.cardStyle.current}>
          <div>
          {props.item.name}: {props.item.value}
          <div style={{ fontSize: "x-small" }}>
              Total income: {props.item.displayIncome}
              <br></br> Cost: {props.item.displayCost}
            </div>
          </div>
        </Paper>
      </Grid>)
}

export default WorkerCard;