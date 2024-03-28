import {GroupChart, MemberChart, RefferalProducerTable, Transfer } from "../components/adminpage";
import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
// import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import RefferalChart from "../components/adminpage/RefferalChart";
import Counter from "../components/mainpage/Counter";
import { Grid } from "@mui/material";
import { MainHeader } from "../components/mainpage";
import CustomTable from "../components/common/Table";
import ReferralProducerTable from "../components/common/ReferralProducerTable";
const AdminDashboard: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader color={"#D9D9D9"} title={"Admin Dashboard"} hasPlus={false} />
      <Container maxWidth="xl">
        <Transfer />
        <Counter items={["Total Refferals", "Total Closed Refferals", "Total Revenue Generated  Referrals", "Total Perks Received","Total Unclosed Referrals"]} values={["200","75","$500,000","75","125"]}/>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <CustomTable />
            </Grid>
            <Grid item xs={12} md={8} >
              <ReferralProducerTable />
            </Grid>
        </Grid>
        
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ marginTop: 10 }}>
                <MemberChart />
            </Grid>
            <Grid item xs={12} md={6} sx={{ marginTop: 10 }}>
                <GroupChart />
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: 10 }}>
                <RefferalChart />
            </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default AdminDashboard;
