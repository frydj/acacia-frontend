import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Sections/Layout/Layout';

import Home from './pages/Home';
import Test from './pages/Test';
import DocsNav from './components/Sections/DocsNav/DocsNav';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Todos from './pages/Todos';
import Palette from './pages/Palette';
import Login from './pages/Login';
import Fluree from './pages/Fluree';
import SchemaFetcher from './pages/SchemaFetcher';
import YAML from './pages/YAML';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/pop/">
      <Route path="palette" element={<Palette popped />} />
    </Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="test" element={<Test />} />
      <Route path="fluree" element={<Fluree />} />
      <Route path="schema" element={<SchemaFetcher />} />
      <Route path="docs" element={<DocsNav />} />
      <Route path="todos" element={<Todos />} />
      <Route path="settings" element={<Settings />} />
      <Route path="account" element={<Account />} />
      <Route path="palette" element={<Palette />} />
      <Route path="yaml" element={<YAML />} />
      {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
);
export default AppRoutes;
