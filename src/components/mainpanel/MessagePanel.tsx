import Grid from '@mui/material/Grid';
import Header from './Header';
import styles from './MessagesPanel.module.css'
import Box from '@mui/material/Box';
import MetaPanel from './MetaPanel';

const MessagePanel = () => {

    return <Grid container item>
        <Box sx={{ flexGrow: 1 }}>
            <Grid item className={styles.messagePanle}>
                <Grid item xs={8}>
                    <Header />
                </Grid>
                <Grid item xs={4}>
                    <MetaPanel />
                </Grid>
            </Grid>
        </Box>
    </Grid >

}

export default MessagePanel;