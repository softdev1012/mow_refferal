import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Counter from "../components/mainpage/Counter";
import { MainHeader } from "../components/mainpage";
import { ConfirmModal, ReferralList, ReferralEditModal } from "../components/referral";
import { useEffect, useState } from "react";
import { fetchReferralTotals } from "../services";

const ReferralDashboard: React.FC = () => {
  const [totReferral, setTotReferral] = useState("0");
  const [totClosedReferral, setTotClosedReferral] = useState("0");
  const [totUnclosedReferral, setTotUnclosedReferral] = useState("0");
  const fetchTotalNumber = async () => {
    try {
        const response =  await fetchReferralTotals();
        setTotReferral(response.totReferral);
        setTotClosedReferral(response.totClosedReferral);
        setTotUnclosedReferral(response.totUnclosedReferral);
    } catch (error) {
        console.error("Error fetching owners:", error);
    }
};
useEffect(() => {
    fetchTotalNumber();
}, []);
const totValues = [totReferral, totClosedReferral, totUnclosedReferral];
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader
        color={"#FED5D5"}
        title={"Referrals Dashboard"}
        hasPlus={false}
      />
      <Container maxWidth="xl">
        <Counter
          items={[
            "Total Referrals",
            "Total Closed Referrals",
            "Total Unclosed Referrals",
          ]}
          values={totValues}
        />
        <MainPage>
          <ReferralList />
        </MainPage>
      </Container>
      <ReferralEditModal />
      <ConfirmModal index={"referral"} />
    </>
  );
};
export default ReferralDashboard;
