import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import styles from "./Channels.module.css"

const Channels = () => {
    function generate(element: React.ReactElement) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }
    return <List dense={false}>
        <ListItem>
            <ListItemText className={styles.listItemTitle}
                primary="CHANNELS"
                secondary={false ? 'Secondary text' : null}
            />
        </ListItem>
        {generate(
            <ListItem className={styles.listItem}>
                <ListItemText className={styles.listItemText}
                    primary="# Single-line item"
                    secondary={false ? 'Secondary text' : null}
                />
            </ListItem>
        )}
    </List>
}

export default Channels;