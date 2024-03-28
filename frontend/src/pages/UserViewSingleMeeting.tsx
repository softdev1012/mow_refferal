import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";

import Container from "@mui/material/Container";
import { MainHeader } from "../components/mainpage";
import { BusinessInfo } from "../components/UserProfileDashboard";
import { CustomAvatar } from "../components";
import { Grid, Typography } from "@mui/material";

const UserViewSingleMeetings: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader
        color={"#D85BA8"}
        title={"User View Single Meetings"}
        hasPlus={false}
      />
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          sx={{ marginTop: 5, alignItems: "center" }}
        >
          <Grid item xs={12} md={3}>
            <BusinessInfo />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h3" component="div" fontWeight="bold">
              Clan/Group Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <CustomAvatar width="15rem" height="15rem" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h3" component="div" fontWeight="bold">
              Clan/Group Name
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{textAlign:"left"}}>
             <Typography variant="h5" component="div" fontWeight="bold">
              Territory
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              Meeting Time
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              Meeting Link
            </Typography>
        </Grid>
      </Container>
    </>
  );
};
export default UserViewSingleMeetings;
