import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';

const SidePanel = () => {

    const Item = styled(Paper)(() => ({
        textAlign: 'center',
        minHeight: "calc(100vh - 16px)",
        maxWidth: "18rem",
        minWidth: "18rem",
        display: 'flex',
        flexDirection: 'column',
        background: '#ad7171'
    }));
    return <Grid container item>
        <Grid item >
            <Item>
                <Title />
            </Item>
        </Grid>
    </Grid >
}

export default SidePanel;