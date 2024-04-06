import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";

import Container from "@mui/material/Container";
import { MainHeader } from "../components/mainpage";
import { BusinessInfo } from "../components/UserProfileDashboard";
import { CustomAvatar } from "../components";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IGroup } from "../types/group";
import { IOwner } from "../types/owner";
import { fetchGroups, fetchOwners, getMeeting } from "../services";
import { IMeeting } from "../types/meeting";
import { useParams } from "react-router-dom";

const UserViewSingleMeetings: React.FC = () => {
  const { id } = useParams<{ id: string}>();
  const meetingId = id? id:"";
  const [groups, setGroups] = useState<IGroup[]>();
  const [owners, setOwners] = useState<IOwner[]>();
  const [meeting, setMeeting] = useState<IMeeting>();
  const fetchGroupsList = async () => {
    try {

      const response =  await fetchGroups(1, 10000000);
      setGroups(response.data);
    } catch (error) {
      console.error("Error fetching owners:", error);
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

  const fetchMeetingInfo = async () => {
    try {
      const response =  await getMeeting(meetingId);
      setMeeting(response);
    } catch (error) {
      console.error("Error fetching owners:", error);
    }
  };
  useEffect(() => {
    fetchGroupsList();
    fetchOwnersList();
    fetchMeetingInfo();
  }, []);
  const getGroupName = () : string => {
    const group = groups?.find(group => group._id === meeting?.group);
    return group?group.name : "";
  };
  const getGroupLocation = () : string => {
    const group = groups?.find(group => group._id === meeting?.group);
    return group?group.location : "";
  };
  const getOwnerName = () : string => {
    const owner = owners?.find(owner => owner._id === meeting?.owner);
    return owner?owner.name : "";
  };
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
            <Typography variant="h4" component="div" fontWeight="bold">
              {getGroupName()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <CustomAvatar width="15rem" height="15rem" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" component="div" fontWeight="bold">
              {getOwnerName()}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{textAlign:"left"}}>
             <Typography variant="h5" component="div" fontWeight="bold">
              {getGroupLocation()}
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              {meeting?.meetingtime}
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              {meeting?.meetinglink}
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              {meeting?.meetingname}
            </Typography>
        </Grid>
      </Container>
    </>
  );
};
export default UserViewSingleMeetings;
