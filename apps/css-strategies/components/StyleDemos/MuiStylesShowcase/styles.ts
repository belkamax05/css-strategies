import {
  COLOR_DEFAULT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  SHARED_BUTTON_STYLES,
} from '@app/styles/styleImport';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: 5,
    },
    buttons: {
      '& > button': {
        marginRight: 10,
      },
    },
    btn: {
      ...SHARED_BUTTON_STYLES,
    },
    ['btn-default']: {
      backgroundColor: COLOR_DEFAULT,
    },
    ['btn-primary']: {
      color: 'white',
      backgroundColor: COLOR_PRIMARY,
    },
    ['btn-secondary']: {
      color: 'white',
      backgroundColor: COLOR_SECONDARY,
    },
  }),
  { name: 'MuiStylesShowcase' },
);

export default useStyles;
