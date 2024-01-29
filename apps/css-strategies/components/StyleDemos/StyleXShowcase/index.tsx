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
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 4,
    color: '#333',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.42857,
    marginBottom: 0,
    padding: '6px 12px',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },
  btnPrimary: {
    color: 'white',
    // backgroundColor: COLOR_PRIMARY,
    backgroundColor: '#3f45e3',
  },
  btnSecondary: {
    color: 'white',
    // backgroundColor: COLOR_SECONDARY,
    backgroundColor: '#1b8311',
  },
});

const StyleXShowcase = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.buttons)}>
        <button {...stylex.props(styles.btn)}>Default button</button>
        <button {...stylex.props(styles.btn, styles.btnPrimary)}>
          Primary
        </button>
        <button {...stylex.props(styles.btn, styles.btnSecondary)}>
          Secondary
        </button>
      </div>
    </div>
  );
};

export default StyleXShowcase;
