import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Counter from '../components/mainpage/Counter';
import { MainHeader } from "../components/mainpage";
import GroupList from "../components/group/GroupList";
import GroupModal from "../components/group/GroupModal";
import { ConfirmModal } from "../components/group";
const Groups: React.FC = () =>{
    return(
        <>
        <ResponsiveAppBar />
        <MainHeader color={"#38B6FF"} title={"Groups/Clan"} hasPlus={true} />
        <Container maxWidth="xl">
        <Counter items={["Total Groups", "Total Members"]} values={["200","75"]}/>
        <MainPage>
                <GroupList/>
        </MainPage>
        </Container>
        <GroupModal />
        <ConfirmModal index={"Group"} />  
        </>
    );
}
export default Groups;