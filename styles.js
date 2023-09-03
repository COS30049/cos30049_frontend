import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '75%'
    },
    media: {
        height: 0,
        paddingTop: '50%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '50px',
    },
}))