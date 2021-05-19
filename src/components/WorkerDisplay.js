import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function WorkerDisplay(props)
{
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
                  props.handleBuyItem(props.workers.farmers);
                }}
              >
                <Paper className={props.classes.foodResourceCard}>
                  <div>
                    Farmers: {props.workers.farmers.value}
                    <div style={{ fontSize: "x-small" }}>
                      Total income: {props.workers.farmers.displayIncome.food}
                      <br></br> Cost: {props.workers.farmers.displayCost}
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={3}
                onClick={() => {
                  props.handleBuyItem(props.workers.woodsmen);
                }}
              >
                <Paper className={props.classes.woodResourceCard}>
                  <div>
                    Woodsmen: {props.workers.woodsmen.value}
                    <div style={{ fontSize: "x-small" }}>
                      Total income {props.workers.woodsmen.displayIncome}
                      <br></br> Cost: {props.workers.woodsmen.displayCost}
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={3}
                onClick={() => {
                  props.handleBuyItem(props.workers.quarrymen);
                }}
              >
                <Paper className={props.classes.stoneResourceCard}>
                  <div>
                    QuarryWorkers: {props.workers.quarrymen.value}
                    <div style={{ fontSize: "x-small" }}>
                      Total income {props.workers.quarrymen.displayIncome}
                      <br></br> Cost: {props.workers.quarrymen.displayCost}
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={3}
                onClick={() => {
                  props.handleBuyItem(props.workers.prospectors);
                }}
              >
                <Paper className={props.classes.metalResourceCard}>
                  <div>
                    Prospectors: {props.workers.prospectors.value}
                    <div style={{ fontSize: "x-small" }}>
                      Total income {props.workers.prospectors.displayIncome}
                      <br></br> Cost: {props.workers.prospectors.displayCost}
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            </div>
    )
}

export default WorkerDisplay;