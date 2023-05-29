import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Bits/Container/Container';
import EditorMain from '../components/Sections/CodeEditor/EditorMain';
import useGlobal from '../hooks/useGlobal';

const query = {
  ledger: 'http-api-gateway/test',
  query: {
    where: [['?i', 'id', 'ex:Derek']],
    select: {
      '?i': ['*'],
    },
  },
};

axios.defaults.baseURL = 'http://localhost:58090/fluree/';

document.documentElement.setAttribute('data-color-mode', 'dark');

const Fluree = () => {
  const [value, setValue] = useState(JSON.stringify(query, null, 2));
  const [code, setCode] = useState(JSON.stringify(query, null, 2));

  const {
    state: { flureeEditorKey, responseEditorKey },
  } = useGlobal();

  console.log({ flureeEditorKey });
  console.log({ responseEditorKey });

  const submitQuery = () => {
    let url = '/create';
    // let url = '/query';
    // let url = '/transact';
    axios.post(url, JSON.parse(value)).then((res) => console.log(res.data));
  };

  const editorWidth = 'calc(50vw - 60px)';

  return (
    <Container lay={{ x: 'start', y: 'start' }} className="editors-container">
      <EditorMain storageKey={flureeEditorKey} width={editorWidth} />
      <EditorMain storageKey={responseEditorKey} width={editorWidth} readOnly />
      {/* <button onClick={submitQuery}>Transmit</button> */}
      {/* <div id="returned"></div>
      <div id="expectedTypes"></div> */}
    </Container>
  );
};

export default Fluree;
