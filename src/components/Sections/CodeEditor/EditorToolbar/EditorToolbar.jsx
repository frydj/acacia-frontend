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
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from 'react-tippy';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import useGlobal from '../../../../hooks/useGlobal';

const EditorToolbar = ({ width, code, setCode, tabIndex, setTabIndex }) => {
  const { classes } = useStyles({ width });

  const {
    state: { editorValuesKey },
  } = useGlobal();

  const { getValue, setValue } = useLocalStorage();

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
      let storedItems = JSON.parse(getValue(editorValuesKey));
      storedItems[tabIndex].value = stringed;
      setValue(editorValuesKey, JSON.stringify(storedItems));
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Container
      className={classes.editorToolbar}
      lay={{ x: 'start', y: 'center', p: '0' }}
    >
      <Tooltip
        title="New"
        position="bottom"
        delay={1250}
        size="small"
        arrow={true}
        offset={100}
      >
        <IconButton size="small">
          <New sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Open"
        position="bottom"
        delay={1250}
        size="small"
        arrow={true}
        offset={100}
      >
        <IconButton size="small">
          <Open sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Save"
        position="bottom"
        delay={1250}
        size="small"
        arrow={true}
        offset={100}
      >
        <IconButton size="small">
          <Save sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Format JSON"
        position="bottom"
        delay={1250}
        size="small"
        arrow={true}
        offset={100}
      >
        <IconButton size="small" onClick={formatCode}>
          <Prettify sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>

      <Tooltip
        title="Submit Transaction"
        position="bottom"
        delay={1250}
        size="small"
        arrow={true}
        offset={100}
      >
        <IconButton size="small">
          <Transact sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Submit Query"
        position="bottom"
        delay={1250}
        size="small"
        arrow={true}
        offset={100}
      >
        <IconButton size="small">
          <Query sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default EditorToolbar;
