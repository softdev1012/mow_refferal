import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Counter from '../components/mainpage/Counter';
import MainHeader from "../components/mainpage/MainHeader";
import { ConfirmModal} from "../components/user";
import { UserList, UserModal } from "../components/user";

const UsersDashboard: React.FC = () =>{
    return(
        <>
        <ResponsiveAppBar />
        <MainHeader color={"#C1FF72"} title={"Users Dashboard"} hasPlus={true} />
        <Container maxWidth="xl">
            <Counter items={["Total Users", "Total Active Users", "Total Inactive Users"]} values={["200","125","75"]}/>
            <MainPage>
                <UserList/>
            </MainPage>
        </Container>
        <UserModal />
        <ConfirmModal index={"user"} />
        </>
    );
}
export default UsersDashboard;