import Grid from '@mui/material/Grid';
import Title from './Title';
import Channels from './Channels';
import DirectMessages from './DirectMessages';
import styles from "./SidePanel.module.css"

const SidePanel = () => {

    return <Grid container item>
        <Grid item className={styles.sidePanle}>
            <Title />
            <Channels />
            <DirectMessages />
        </Grid>
    </Grid >
}

export default SidePanel;