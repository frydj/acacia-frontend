import React, { useState } from 'react';
import Container from '../../../Bits/Container/Container';
import { useStyles } from './EditorToolbarStyles';
import {
  AddBox as Create,
  AutoAwesome as Prettify,
  ContentCopy as Copy,
  Download,
  ElectricBolt as Transact,
  FolderOpen as Open,
  NoteAdd as New,
  Save,
  Search as Query,
} from '@mui/icons-material';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import EditorToolbarItem from './EditorToolbarItem';
import axios from 'axios';
import LedgerSelect from '../LedgerSelect/LedgerSelect';

const circularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const EditorToolbar = ({
  width,
  storageKey,
  readOnly,
  newTab,
  code,
  setCode,
  tabIndex,
  setTabIndex,
}) => {
  const { classes } = useStyles({ width });
  const { getValue, setValue } = useLocalStorage();
  const [ledger, setLedger] = useState(getValue('activeLedger') || '');

  const todo = (message) => {
    console.log(`TODO: ${message}`);
  };

  const transact = () => {
    console.log('transact!');
    let url = '/transact';

    const requestBody = {
      ledger: ledger,
      txn: JSON.parse(code),
    };

    axios.post(url, requestBody).then((res) => {
      console.log(res.data);
      let resultBody = [
        {
          name: 'Results',
          value: JSON.stringify(res.data, null, 2),
          active: true,
        },
      ];
      setValue('responseValues', JSON.stringify(resultBody, null, 2));
      window.dispatchEvent(new Event('storage'));
    });
  };

  const query = () => {
    console.log('query!');
    let url = '/query';

    const requestBody = {
      ledger: ledger,
      query: JSON.parse(code),
    };

    console.log(requestBody);

    axios
      .post(url, requestBody)
      .then((res) => {
        console.log(res.data);
        let resultBody = [
          {
            name: 'Results',
            value: JSON.stringify(res.data, null, 2),
            active: true,
          },
        ];
        setValue('responseValues', JSON.stringify(resultBody, null, 2));
        window.dispatchEvent(new Event('storage'));
      })
      .catch((e) => {
        console.warn(e.response.data);
        let resultBody = [
          {
            name: 'Results',
            value: JSON.stringify(e.response.data, null, 2),
            active: true,
          },
        ];
        setValue('responseValues', JSON.stringify(resultBody, null, 2));
        window.dispatchEvent(new Event('storage'));
      });
  };

  const create = () => {
    console.log('create!');
    let url = '/create';
    axios.post(url, JSON.parse(code)).then((res) => console.log(res.data));
  };

  const formatCode = () => {
    let stringed = '';
    let parsed;
    try {
      stringed = JSON.stringify(JSON.parse(code), null, 2).trim();
      parsed = JSON.parse(stringed);
      setCode(stringed);

      // need to change localstorage to be the newly formatted code
      let storedItems = JSON.parse(getValue(storageKey));
      storedItems[tabIndex].value = stringed;
      setValue(storageKey, JSON.stringify(storedItems));
    } catch (e) {
      console.warn(e);
    }
  };

  if (!readOnly) {
    return (
      <Container
        className={classes.editorToolbar}
        lay={{ x: 'start', y: 'center', p: '0' }}
      >
        <LedgerSelect ledger={ledger} setLedger={setLedger} />

        <EditorToolbarItem title="New" onClick={newTab}>
          <New sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Open" onClick={() => todo('open')}>
          <Open sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Save" onClick={() => todo('save')}>
          <Save sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Download" onClick={() => todo('download')}>
          <Download sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Autoformat" onClick={formatCode}>
          <Prettify sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Copy" onClick={() => todo('copy')}>
          <Copy sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Create Ledger" onClick={create}>
          <Create sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Transact" onClick={transact}>
          <Transact sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Query" onClick={query}>
          <Query sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>
      </Container>
    );
  }
  return (
    <Container
      className={classes.editorToolbar}
      lay={{ x: 'start', y: 'center', p: '0' }}
    >
      <EditorToolbarItem title="Autoformat" onClick={formatCode}>
        <Prettify sx={{ fontSize: '20px' }} />
      </EditorToolbarItem>

      <EditorToolbarItem title="Download" onClick={() => todo('download')}>
        <Download sx={{ fontSize: '20px' }} />
      </EditorToolbarItem>

      <EditorToolbarItem title="Copy" onClick={() => todo('copy')}>
        <Copy sx={{ fontSize: '20px' }} />
      </EditorToolbarItem>
    </Container>
  );
};

export default EditorToolbar;
