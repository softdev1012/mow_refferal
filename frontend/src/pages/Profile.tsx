import { Container, Grid, Button, Stack } from "@mui/material";
import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
import { CustomAvatar, Perk } from "../components";
import { MainHeader } from "../components/mainpage";
import PerkCard from "../components/perk/Card";
import {
  AccountInfo,
  BusinessInfo,
  ProfileTable,
  Total,
} from "../components/UserProfileDashboard";

const Profile: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader color={"#C1FF72"} title={"User Profile"} hasPlus={false} />
      <Container maxWidth="xl" sx={{ marginTop: "3rem" }}>
        <Grid container direction="row">
          {" "}
          {/* Enclose direction in quotes */}
          <Grid item xs={12} md={3} sx={{ marginTop: 10 }}>
            <Grid
              container
              direction="column"
              spacing={1}
              sx={{
                width: "20rem",
                marginTop: "0.5rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid container item alignItems="center" justifyContent="center">
                <CustomAvatar width="15rem" height="15rem"/>
              </Grid>
              <Grid
                container
                item
                alignItems="center"
                direction="column"
                spacing={1}
              >
                <Grid item sx={{ fontWeight: 600 }}>
                  User Name
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  Phone
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  Email
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  <Button>Edit Profile</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} sx={{ marginTop: 10 }}>
            <Grid
              container
              direction="column"
              spacing={1}
              sx={{
                width: "100%",
                marginTop: "0.5rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid container direction="row">
                <Grid item xs={12} md={6} >
                  <BusinessInfo />
                </Grid>
              </Grid>
              <Stack spacing={2} direction="row" sx={{ marginTop: 2 }}>
                {" "}
                {/* Add marginTop style here */}
                <Button variant="contained" size="large">
                  Send Refferal
                </Button>{" "}
                {/* Increase size to large */}
              </Stack>

              <Grid container direction="row" justifyContent="space-around">
                <Perk />
                <Perk />
                <Perk />
                <Perk />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Profile;
