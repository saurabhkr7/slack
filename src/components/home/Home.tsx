import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useEffect } from "react";
import ColorPanel from "../colorpanel/ColorPanel";
import SidePanel from "../sidepanel/SidePanel";
import { Box } from "@mui/material";


const Home = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        if (!token) return navigate("/login");
    })
    return <Box sx={{ flexGrow: 1 }}>
        <Grid container direction='row' wrap='nowrap'>
            <ColorPanel />
            <SidePanel />
        </Grid>
    </Box>
}

export default Home;