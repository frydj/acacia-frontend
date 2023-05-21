import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Bits/Container/Container';

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

const Fluree = () => {
  const [value, setValue] = useState(JSON.stringify(query, null, 2));

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  const submitQuery = () => {
    console.log('submit query');
    let url = '/create';
    // let url = '/query';
    // let url = '/transact';
    axios
      // .post(url, JSON.parse(value), { withCredentials: true })
      // .post(url, query)
      .post(url, JSON.parse(value))
      .then((res) => console.log(res.data));

    // axios
    //   .get('https://schema.org/recipient', {
    //     'content-type': 'application/json',
    //   })
    //   .then((res) => {
    //     console.log(res.data);

    //     // snipped
    //     // var s = '<div id="myDiv"></div>';
    //     let ret = document.getElementById('returned');
    //     ret.innerHTML = res.data;

    //     let exp = document.getElementById('expectedTypes');
    //     exp.appendChild(
    //       ret.querySelector('.definition-table').querySelector('code')
    //     );
    //   });
  };

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button onClick={submitQuery}>Transmit</button>
      <div id="returned"></div>
      <div id="expectedTypes"></div>
    </Container>
  );
};

export default Fluree;
