import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './Header.module.css'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} className={styles.container}>
                <Grid item xs={11.5} >
                    <Item className={styles.item}>
                        <Grid item xs={4} className={styles.chatName}>
                            <h2>#Random</h2>
                        </Grid>
                        <Grid item xs={4} >
                            <TextField
                                id="filled-search"
                                label="Search field"
                                type="search"
                                size="small"
                            />
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}