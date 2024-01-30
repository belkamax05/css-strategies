import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    padding: 5,
  },
  buttons: {
    // '& > button': {
    //   marginRight: 10,
    // },
    //? does not work
  },
  btn: {
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: 4,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    marginBottom: 0,
    padding: '6px 12px',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    marginRight: 10,
  },
  ['btn-default']: {
    backgroundColor: '#dedede',
  },
  ['btn-primary']: {
    color: 'white',
    backgroundColor: '#3f45e3',
  },
  ['btn-secondary']: {
    color: 'white',
    backgroundColor: '#1b8311',
  },
});

export default styles;
