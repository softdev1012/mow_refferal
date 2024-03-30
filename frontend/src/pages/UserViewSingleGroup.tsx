import { RefferalProducerTable, Transfer } from "../components/adminpage";
import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
// import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Counter from "../components/mainpage/Counter";
import { Grid, Typography } from "@mui/material";
import { MainHeader, MainPage } from "../components/mainpage";
import { BusinessInfo } from "../components/UserProfileDashboard";
import { CustomAvatar } from "../components";

const UserViewSingleGroup: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader
        color={"#38B6FF"}
        title={"User Single Group"}
        hasPlus={false}
      />
      <Container maxWidth="xl">
        <Grid container direction="row" spacing={2}>
          {/* BusinessInfo component */}
          <Grid
            item
            container
            xs={12}
            md={3}
            justifyContent="center"
            alignItems= "center" // Align the content to the center on medium screens
          >
            <BusinessInfo />
          </Grid>

          {/* Counter component */}
          <Grid item xs={12} md={9}>
            <Counter
              items={[
                "Total Refferals",
                "Total Closed Refferals",
                "Total Revenue Generated Referrals",
                "Total Perks Received",
              ]}
              values={["200", "75", "$500,000", "75"]}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" sx={{ my: "4rem" }} spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" component="div" fontWeight="bold">
              Clan/Group Name
            </Typography>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <CustomAvatar width="15rem" height="15rem" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container direction="column" spacing={1}>
                  <Typography variant="h6" component="div" fontWeight="bold">
                    Clan/Owner
                  </Typography>
                  <Grid item sx={{ fontWeight: 600 }}>
                    User Name
                  </Grid>
                  <Grid item sx={{ fontWeight: 600 }}>
                    Phone
                  </Grid>
                  <Grid item sx={{ fontWeight: 600 }}>
                    Email
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" component="div" fontWeight="bold">
              Meeting Time: *******
            </Typography>
            <Typography variant="h6" component="div" fontWeight="bold">
              Meeting Link: *******
            </Typography>
            <Grid item sx={{ textAlign: "left", mt: "3rem" }}>
              <Typography variant="h6" component="div" fontWeight="bold">
                Owner Message
              </Typography>
              <Typography>
                Come join the best MOW clan in the country, check out our stats,
                give me a call and talk about the opportunity here. Our group is
                one of the top performers in the entire country. We have plenty
                of seats left.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <MainPage />
      </Container>
    </>
  );
};
export default UserViewSingleGroup;