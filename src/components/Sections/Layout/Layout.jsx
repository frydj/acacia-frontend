import { Outlet, Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Container from '../../Bits/Container/Container';
import NavItem from '../../Bits/NavItem/NavItem';
import './Layout.css';

const Layout = () => {
  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col', p: '0' }}>
      <Banner />
      <nav className="top-nav">
        <Container
          lay={{ x: 'between', y: 'center', p: '0' }}
          className="top-nav-inner"
          inline
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="/test">Test</NavItem>
          <NavItem to="/fluree">Fluree</NavItem>
          <NavItem to="/schema">Schema.org Fetcher</NavItem>
          <NavItem to="/docs">Docs</NavItem>
          <NavItem to="/todos">Todos</NavItem>
          <NavItem to="/palette">Palette</NavItem>
          <NavItem to="/account">Account</NavItem>
          <NavItem to="/settings">Settings</NavItem>
          <NavItem to="/yaml">YAML</NavItem>
        </Container>
      </nav>

      <Outlet />
    </Container>
  );
};

export default Layout;
