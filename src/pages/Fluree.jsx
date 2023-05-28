import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Bits/Container/Container';
import EditorMain from '../components/Sections/CodeEditor/EditorMain';

const query = {
  ledger: 'http-api-gateway/test',
  query: {
    where: [['?i', 'id', 'ex:Derek']],
    select: {
      '?i': ['*'],
    },
  },
};

axios.defaults.baseURL = 'http://localhost:58090/fluree';

document.documentElement.setAttribute('data-color-mode', 'dark');

const Fluree = () => {
  const [value, setValue] = useState(JSON.stringify(query, null, 2));
  const [code, setCode] = useState(JSON.stringify(query, null, 2));

  const submitQuery = () => {
    let url = '/create';
    // let url = '/query';
    // let url = '/transact';
    axios.post(url, JSON.parse(value)).then((res) => console.log(res.data));
  };

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <EditorMain width="50vw" />
      {/* <button onClick={submitQuery}>Transmit</button> */}
      <div id="returned"></div>
      <div id="expectedTypes"></div>
    </Container>
  );
};

export default Fluree;
