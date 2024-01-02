import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import styles from "./Channels.module.css"
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';


const DirectMessages = () => {
    function generate(element: React.ReactElement) {
        return [0, 1, 2, 3, 4].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }
    return <List dense={false} id="list">
        <ListItem>
            <ListItemText className={styles.listItemTitle}
                primary="DIRECT MESSAGES (5)"
                secondary={false ? 'Secondary text' : null}
            />
        </ListItem>
        {generate(
            <ListItem className={styles.listItem}>
                <ListItemText className={styles.listItemText}
                    primary="message from"
                    secondary={false ? 'Secondary text' : null}
                />
                <CircleRoundedIcon fontSize='small' color='success' />
            </ListItem>
        )}
    </List>
}

export default DirectMessages;