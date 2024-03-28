import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import { MainHeader } from "../components/mainpage";
import { ReferralList } from "../components/referral";

const UserViewGroup: React.FC = () =>{
    return(
        <>
        <ResponsiveAppBar />
  | 
        <MainHeader color={"#38B6FF"} title={"User View Group"} hasPlus={false} />
        <Container maxWidth="xl">
            <MainPage>
                <ReferralList />
            </MainPage>
        </Container>
        </>
    );
}
export default UserViewGroup;