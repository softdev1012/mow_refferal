import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Counter from '../components/mainpage/Counter';
import { MainHeader } from "../components/mainpage";
import {  ConfirmModal} from "../components/owner";
import { OwnerList, OwnerModal } from "../components/owner";
const OwnerDashboard: React.FC = () =>{
    return(
        <>
        <ResponsiveAppBar />
        <MainHeader color={"#FFDE59"} title={"Owners/Clan Leaders Dashboard"} hasPlus={false} />
        <Container maxWidth="xl">
        <Counter items={["Total Users", "Total Active Users", "Total Inactive Users"]} values={["200","75","125"]}/>
        <MainPage>
                <OwnerList/>
            </MainPage>
        </Container>
        <OwnerModal />        
      <ConfirmModal index={"Owner"} />  
        </>
    );
}
export default OwnerDashboard;