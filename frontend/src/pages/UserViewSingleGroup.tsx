// import { ReferralProducerTable, Transfer } from "../components/adminpage";
import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
// import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Counter from "../components/mainpage/Counter";
import { Grid, Typography } from "@mui/material";
import { MainHeader } from "../components/mainpage";
import { BusinessInfo } from "../components/UserProfileDashboard";
import { CustomAvatar } from "../components";
import { useParams } from "react-router-dom";
import { fetchOwners, getGroup } from "../services";
import { IGroup } from "../types/group";
import { useEffect, useState } from "react";
import { IOwner } from "../types/owner";
import GroupMemberList from "../components/group/GroupMemberList";

const UserViewSingleGroup: React.FC = () => {
  const { id } = useParams<{ id: string}>();
  const groupId = id? id:"";
  const [groupInfo, setGroupInfo] = useState<IGroup>();
  const [owners, setOwners] = useState<IOwner[]>();
  
  useEffect(() => {
    fetchGroupInfo();
    fetchOwnersList();
  }, []);

  const fetchGroupInfo = async () => {
    try {
      const response =  await getGroup(groupId);
      setGroupInfo(response);
    } catch (error) {
      console.error("Error fetching group:", error);
    }
  };
  const fetchOwnersList = async () => {
    try {

      const response =  await fetchOwners(1, 10000000);
      setOwners(response.data);
    } catch (error) {
      console.error("Error fetching owners:", error);
    }
  };
  const getOwnerName = (ownerId: string | undefined) : string => {
    const owner = owners?.find(owner => owner._id === ownerId);
    return owner?owner.name : "";
  };
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
                "Total Referrals",
                "Total Closed Referrals",
                "Total Revenue Generated Referrals",
                "Total Perks Received",
              ]}
              values={["200", "75", "$500,000", "75"]}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" sx={{ my: "4rem" }} spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" component="div" fontWeight="bold" style={{ textAlign: 'left' }}>
              {groupInfo?.name}
            </Typography>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <CustomAvatar width="15rem" height="15rem" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container direction="column" spacing={1}>
                  <Typography variant="h6" component="div" fontWeight="bold">
                    {getOwnerName(groupInfo?.owner)}
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

        <GroupMemberList />
      </Container>
    </>
  );
};
export default UserViewSingleGroup;
