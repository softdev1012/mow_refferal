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
import { useState, useEffect} from "react";
import { fetchGroupTotals } from "../services";

const Groups: React.FC = () =>{

    const [totGroupNum, setTotGroupNum] = useState(0);
    const [totMemberNum, setTotMemberNum] = useState(0);

    const fetchTotalNumber = async () => {
        try {
            const response =  await fetchGroupTotals();
            setTotGroupNum(response.totGroupNum);
            setTotMemberNum(response.totMemberNum);
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
        <MainHeader color={"#38B6FF"} title={"Groups/Clan"} hasPlus={true} />
        <Container maxWidth="xl">
        <Counter items={["Total Groups", "Total Members"]} values={[totGroupNum.toString(),totMemberNum.toString()]}/>
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