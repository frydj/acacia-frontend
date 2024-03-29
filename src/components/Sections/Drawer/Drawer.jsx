import useGlobal from '../../../hooks/useGlobal';
import Container from '../../Bits/Container/Container';
import { useStyles } from './DrawerStyles';
import { Link } from 'react-router-dom';

const Drawer = () => {
  const {
    state: { open },
    dispatch,
  } = useGlobal();
  const { classes } = useStyles({ open });

  const toggle = () => {
    dispatch({ type: 'open', value: false });
  };

  return (
    <Container id="test-drawer" className={classes.drawer}>
      this is the drawer
      <div className={classes.navItem}>
        <Link to="/">home</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/fluree">fluree</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/schema">schema</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/docs">docs</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/todos">todos</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/settings">settings</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/account">account</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/palette">palette</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/yaml">yaml</Link>
      </div>
    </Container>
  );
};

export default Drawer;
