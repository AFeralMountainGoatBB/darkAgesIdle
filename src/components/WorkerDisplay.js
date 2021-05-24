import Grid from "@material-ui/core/Grid";
import WorkerCard from "./WorkerCard.js"

function WorkerDisplay(props)
{
    return (
        <div style={{padding:20,
            overflowX:'hidden'}}>
            <Grid
              container
              spacing={3}
            >
              <WorkerCard handleBuyItem={props.handleBuyItem}
              worker={props.workers.farmers}
              classes={props.classes}
              ></WorkerCard>
              <WorkerCard handleBuyItem={props.handleBuyItem}
              worker={props.workers.woodsmen} classes={props.classes}></WorkerCard>
              <WorkerCard handleBuyItem={props.handleBuyItem}
              worker={props.workers.quarrymen} classes={props.classes}></WorkerCard>
              <WorkerCard handleBuyItem={props.handleBuyItem}
              worker={props.workers.prospectors} classes={props.classes}></WorkerCard>
            </Grid>
            </div>
    )
}

export default WorkerDisplay;