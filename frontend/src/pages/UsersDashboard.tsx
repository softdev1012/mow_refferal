import ResponsiveAppBar from "../layouts/ResponsiveAppBar";
// import PageHeader from "../layouts/PageHeader";
import MainPage from "../components/mainpage/MainPage";
// import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Counter from '../components/mainpage/Counter';
import MainHeader from "../components/mainpage/MainHeader";
import { ConfirmModal} from "../components/user";
import { UserList, UserModal } from "../components/user";
import { useEffect, useState } from "react";
import { fetchUserTotals } from "../services";

const UsersDashboard: React.FC = () =>{
    const [totals, setTotals] = useState<any>();
    const tots = [totals?.total, totals?.totalActive, totals?.totalInactive];
    const fetchTotalNumber = async () => {
        try {
            const response =  await fetchUserTotals();
            setTotals(response);
        } catch (error) {
            console.error("Error fetching owners:", error);
        }
    };

    useEffect(() => {
        fetchTotalNumber();
      }, []);
    return(
        <>
        <ResponsiveAppBar />
        <MainHeader color={"#C1FF72"} title={"Users Dashboard"} hasPlus={true} />
        <Container maxWidth="xl">
            <Counter items={["Total Users", "Total Active Users", "Total Inactive Users"]} values={tots}/>
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