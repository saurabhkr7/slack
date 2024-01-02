import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import styles from "./ColorPanel.module.css"


const ColorPanel = () => {

    return <Grid container item sx={{ maxWidth: 'fit-content' }}>
        <Grid item className={styles.colorPanel}>
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
        </Grid>
    </Grid >
}

export default ColorPanel;