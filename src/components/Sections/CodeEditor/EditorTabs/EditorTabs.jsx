import React, { useState, useEffect, useRef } from 'react';
import Container from '../../../Bits/Container/Container';
import { useStyles } from './EditorTabsStyles';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import useGlobal from '../../../../hooks/useGlobal';
import { IconButton } from '@mui/material';
import { Add as NewTab, Close as CloseTab } from '@mui/icons-material';

const EditorTabs = ({
  width,
  tabs,
  setTabs,
  tabIndex,
  setTabIndex,
  refresh,
  setRefresh,
}) => {
  const { classes } = useStyles({ width });
  const { getValue, setValue } = useLocalStorage();

  const {
    state: { editorValuesKey },
  } = useGlobal();

  useEffect(() => {
    setTabs(JSON.parse(getValue(editorValuesKey)));
  }, [tabIndex, refresh]);

  const setActive = (e, index) => {
    const targs = ['svg', 'path', 'BUTTON'];
    if (targs.includes(e.target.tagName)) {
      return;
    }
    setTabIndex(index);
    for (var i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].active = true;
      } else {
        tabs[i].active = false;
      }
    }
    setValue(editorValuesKey, JSON.stringify(tabs));
  };

  const newTab = () => {
    let existingTabs = JSON.parse(getValue(editorValuesKey));

    // get name for new tab
    let tabNames = existingTabs.map((tab) => tab.name);
    let newName = '';
    for (var i = 1; i <= tabNames.length + 1; i++) {
      if (tabNames.indexOf(`tab${i}`) === -1) {
        newName = `tab${i}`;
        break;
      }
    }

    // set all other tab to inactive
    for (var i = 0; i < existingTabs.length; i++) {
      existingTabs[i].active = false;
    }

    // new tab object
    let newOne = {
      name: newName,
      value: '',
      active: true,
    };

    // push the new tab & set local storage
    existingTabs.push(newOne);
    setValue(editorValuesKey, JSON.stringify(existingTabs));
    setTabIndex(existingTabs.length - 1);
  };

  const closeTab = (index) => {
    let existingTabs = JSON.parse(getValue(editorValuesKey));
    let activeTabIndex = existingTabs.map((tab) => tab.active);
    activeTabIndex = activeTabIndex.indexOf(true);

    // if closing the active tab, need to set a new active tab
    if (existingTabs[index].active) {
      existingTabs.splice(index, 1);
      if (existingTabs[index]) {
        existingTabs[index].active = true;
      } else if (existingTabs.length === 0) {
        existingTabs = [
          {
            name: 'tab1',
            value: '',
            active: true,
          },
        ];
      } else {
        existingTabs[index - 1].active = true;
      }
    } else {
      // tab you clicked isn't active, so just splice
      existingTabs.splice(index, 1);
    }

    setValue(editorValuesKey, JSON.stringify(existingTabs));
    setTabIndex(activeTabIndex - 1);
    setRefresh(!refresh);
  };

  if (!tabs) {
    return null;
  }

  return (
    <Container lay={{ x: 'start', y: 'center', p: '0' }}>
      <Container
        className={classes.editorTabs}
        lay={{ x: 'start', y: 'center', p: '0' }}
      >
        {tabs.map((p, i) => (
          <div key={i} className={classes.tabContainer}>
            <span
              key={i}
              onClick={(e) => setActive(e, i)}
              className={
                p.active
                  ? `${classes.editorTab} ${classes.editorTabActive} no-select`
                  : `${classes.editorTab} no-select`
              }
            >
              {p.name}
              <IconButton
                size="small"
                className={classes.closeTab}
                onClick={() => closeTab(i)}
              >
                <CloseTab sx={{ fontSize: '11px' }} />
              </IconButton>
            </span>
            <span className={classes.separator}></span>
          </div>
        ))}
      </Container>
      <IconButton size="small" className={classes.newTab} onClick={newTab}>
        <NewTab sx={{ fontSize: '18px' }} />
      </IconButton>
    </Container>
  );
};

export default EditorTabs;
