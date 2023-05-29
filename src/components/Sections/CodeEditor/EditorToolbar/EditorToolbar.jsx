import React from 'react';
import Container from '../../../Bits/Container/Container';
import { useStyles } from './EditorToolbarStyles';
import {
  AutoAwesome as Prettify,
  ElectricBolt as Transact,
  Search as Query,
  Save,
  FolderOpen as Open,
  NoteAdd as New,
  ContentCopy as Copy,
  Download,
} from '@mui/icons-material';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import EditorToolbarItem from './EditorToolbarItem';
import axios from 'axios';

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

  const todo = (message) => {
    console.log(`TODO: ${message}`);
  };

  const transact = () => {
    console.log('transact!');
    let url = '/transact';
    axios.post(url, JSON.parse(code)).then((res) => console.log(res.data));
  };

  const query = () => {
    // this is just a test change
    console.log('query!');
    let url = '/query';
    axios.post(url, JSON.parse(code)).then((res) => console.log(res.data));
  };

  const formatCode = () => {
    console.log('format code!');
    let stringed = '';
    let parsed;
    try {
      stringed = JSON.stringify(JSON.parse(code), null, 2).trim();
      console.log(stringed);
      parsed = JSON.parse(stringed);
      console.log(parsed);
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
