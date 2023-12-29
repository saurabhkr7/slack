import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';


const ColorPanel = () => {

    const Item = styled(Paper)(() => ({
        textAlign: 'center',
        minHeight: "calc(100vh - 16px)",
        maxWidth: "60px",
        minWidth: "60px",
        display: 'flex',
        background: 'black',
        flexDirection: 'column'
    }));
    return <Grid container item sx={{ maxWidth: 'fit-content' }}>
        <Grid item>
            <Item>
                <Card sx={{
                    minWidth: 50,
                    maxWidth: 50,
                    maxHeight: 50,
                    marginTop: "20px",
                    marginLeft: "5px",
                    backgroundColor: "lightblue",
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }} onClick={() => { }}>
                    <CardContent>
                        <AddIcon fontSize='large' />
                    </CardContent>
                </Card>
            </Item>
        </Grid>
    </Grid >
}

export default ColorPanel;