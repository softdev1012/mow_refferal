import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CustomAvatar } from ".";

const Perk = () => {
  return (
    <Card sx={{ maxWidth: "30rem", marginTop: "1rem", borderRadius: 5 }}>
      <Grid container direction={"row"}>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPECIAL PERK
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              75$
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A perk typically refers to a benefit or advantage that someone
              receives as a result of their position, status, or affiliation
              with a particular group or organization.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
        >
          <CustomAvatar width={"10rem"} height={"10rem"} />
        </Grid>
      </Grid>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Perk;
