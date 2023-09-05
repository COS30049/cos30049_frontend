import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    root: {
        minHeight: '350px',
        width: '300px',
        borderRadius: '20px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
        justifyContent: 'space-evenly',
        boxSizing: "border-box",
    },
    media: {
        height: '200px',
        width:'300px',
        objectFit: 'contain',
        justifyContent: 'center',
        paddingTop: '50%',
        backgroundColor: 'rgb( 228, 228, 228 )',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: "15px",
    },
    cardAllign:{
        justifyContent: 'space-between',
    },
}))