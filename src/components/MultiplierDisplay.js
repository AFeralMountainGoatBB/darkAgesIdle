import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MultiplierCard from "./MultiplierCard.js"

function MultiplierDisplay(props) {
  return (
    <div style={{padding:20,
    overflowX:'hidden'}}>
    <Grid
      container
      spacing={3}
    >
<MultiplierCard building={props.buildings.fields}
handleBuyItem={props.handleBuyItem} classes={props.classes}></MultiplierCard>
<MultiplierCard building={props.buildings.forests}
handleBuyItem={props.handleBuyItem} classes={props.classes}></MultiplierCard>
<MultiplierCard building={props.buildings.outcrops}
handleBuyItem={props.handleBuyItem} classes={props.classes}></MultiplierCard>
<MultiplierCard building={props.buildings.prospects}
handleBuyItem={props.handleBuyItem} classes={props.classes}></MultiplierCard>
    </Grid>
    </div>
  );
}
export default MultiplierDisplay;
