
import { styled } from '@mui/material/styles'

export default styled(() => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));