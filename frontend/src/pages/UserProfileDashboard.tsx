import { Container, Grid, Button, Typography } from "@mui/material";
import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
import { CustomAvatar } from "../components";
import { MainHeader } from "../components/mainpage";
import PerkCard from "../components/common/Card";
import { useAuth } from "../components/common/AuthProvider";
import { useEffect, useState } from "react";
import {
  AccountInfo,
  BusinessInfo,
  ProfileTable,
  Total,
} from "../components/UserProfileDashboard";


const UserProfileDashboard: React.FC = () => {
  const {getInfo} = useAuth();
  const [userInfo, setUserInfo] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getInfo();
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader
        color={"#D9D9D9"}
        title={"User Profile Dashboard"}
        hasPlus={true}
      />
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
                <CustomAvatar height="15rem" width="15rem" />
              </Grid>
              <Grid
                container
                item
                alignItems="center"
                direction="column"
                spacing={1}
              >
                <Grid item sx={{ fontWeight: 600 }}>
                  {userInfo == null? "Name": userInfo.businessName}
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  {userInfo == null? "Phone": userInfo.phone}
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  {userInfo == null? "Email": userInfo.email}
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  <Button>Edit Profile</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              spacing={1}
              sx={{
                width: "20rem",
                marginTop: "2rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid
                container
                item
                alignItems="center"
                direction="column"
                spacing={1}
              >
                <Grid item sx={{ fontWeight: 600 }}>
                  Add Perk
                </Grid>
                <PerkCard />
                <PerkCard />
                <PerkCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
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
              <Grid
                container
                item
                alignItems="center"
                direction="row"
                spacing={1}
                justifyContent={"space-between"}
              >
                <Grid item sx={{ fontWeight: 600 }}>
                  {" "}
                  {/* Removed extra Grid item */}
                  Clan/Group:
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  {" "}
                  {/* Removed extra Grid item */}
                  ****
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  Seat:
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  ****
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  Meeting Time:
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  *******
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  Meeting Link:
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  ******
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid container item xs={12} md={4} alignItems="center">
                  <Grid container item xs={12} md={6} alignContent="center">
                    <BusinessInfo />
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    direction="column"
                    alignItems="center"
                    spacing={3}
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
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <AccountInfo
                    items={[
                      "Member Since",
                      "MemberShip",
                      "User Level",
                      "Activity Rank",
                    ]}
                    content={[
                      "23/03/2023",
                      "Active",
                      "Group Member",
                      "Amazing Member",
                    ]}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row" // Change direction to "row"
              justifyContent="space-between" // Ensure the components are spaced apart
              alignItems="center" // Align items vertically in the center
              spacing={2} // Add spacing between the components
              sx={{
                width: "100%",
                marginTop: "1rem",
                marginBottom: "2rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid
                item
                container
                direction={"row"}
                xs={12}
                md={6}
                justifyContent="flex-start" // Align the content to the left on medium screens
              >
                <Grid
                  item
                  xs={6}
                  md={2}
                  container
                  alignItems="center"
                  sx={{ marginRight: "0.5rem", marginTop: "4rem" }}
                >
                  <Typography>Sent</Typography>
                  <Typography>Received</Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Total
                    items={["Refferals", "Perks"]}
                    sent={["29", "69"]}
                    receive={["52", "32"]}
                    position={["left"]}
                  />
                </Grid>
              </Grid>

              <Grid
                item
                container
                direction={"row"}
                xs={12}
                md={6}
                justifyContent="flex-end" // Align the content to the left on medium screens
              >
                <Grid
                  item
                  xs={6}
                  md={2}
                  container
                  alignItems="center"
                  sx={{ marginRight: "0.5rem", marginTop: "4rem" }}
                >
                  <Typography>Generated</Typography>
                  <Typography>Received</Typography>
                </Grid>
                <Grid item xs={6} md={5}>
                  <Total
                    items={["Estimated Revenue"]}
                    sent={["$125,000"]}
                    receive={["$25,000"]}
                    position={["right"]}
                  />
                </Grid>
              </Grid>
            </Grid>

            <ProfileTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default UserProfileDashboard;
