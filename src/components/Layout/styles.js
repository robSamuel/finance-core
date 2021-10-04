import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'hidden',
            padding: theme.spacing(10, 3, 3, 3)
        }
    })
);