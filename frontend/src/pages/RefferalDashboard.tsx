import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Counter from "../components/mainpage/Counter";
import { MainHeader } from "../components/mainpage";
import { ConfirmModal, ReferralList, ReferralModal } from "../components/referral";

const RefferalDashboard: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <MainHeader
        color={"#FED5D5"}
        title={"Refferals Dashboard"}
        hasPlus={false}
      />
      <Container maxWidth="xl">
        <Counter
          items={[
            "Total Refferals",
            "Total Closed Refferals",
            "Total Unclosed Refferals",
          ]}
          values={["200", "75", "125"]}
        />
        <MainPage>
          <ReferralList />
        </MainPage>
      </Container>
      <ReferralModal />
      <ConfirmModal index={"referral"} />
    </>
  );
};
export default RefferalDashboard;
