import styles from "./Title.module.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import Button from '@mui/material/Button';


const Title = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const { user, logout } = useAuth();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <div className={styles.title}>
        <h1>Slack</h1>
        <div className={styles.username}>
            <Stack direction="row" spacing={1} className={styles.stack} onClick={(e) => handleClick(e)}>
                <Avatar alt="User" />
                <h1>Saurabh</h1>
            </Stack>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>Signed is as {user?.email}</Typography>
                <Button onClick={() => logout()}
                    type="submit"
                    id="sign-out"
                    fullWidth
                    variant="contained">Logout
                </Button>
            </Popover>
        </div>
    </div>
}

export default Title;