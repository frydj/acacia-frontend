import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { defineTheme } from './defineTheme';
import EditorToolbar from './EditorToolbar/EditorToolbar';
import EditorTabs from './EditorTabs/EditorTabs';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import Container from '../../Bits/Container/Container';

let defaultTheme = {};
defineTheme('oceanic-next').then(
  (_) => (defaultTheme = { value: 'oceanic-next', label: 'Oceanic Next' })
);

const EditorMain = ({ width, storageKey, readOnly = false }) => {
  const { getValue, setValue } = useLocalStorage();
  const [code, setCode] = useState('');
  const [tabs, setTabs] = useState(JSON.parse(getValue(storageKey)));
  const [tabIndex, setTabIndex] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // create a blank tab if nothing stored in localstorage
  useEffect(() => {
    if (!getValue(storageKey)) {
      const blankTab = [
        {
          name: readOnly ? 'Results' : 'tab1',
          value: '',
          active: true,
        },
      ];
      setValue(storageKey, JSON.stringify(blankTab));
    }
  }, []);

  useEffect(() => {
    const tabValues = JSON.parse(getValue(storageKey));
    const tabValue = tabValues.filter((tab) => tab.active)[0];
    setCode(tabValue.value);
  }, [tabIndex, refresh]);

  useEffect(() => {
    let tabValues = JSON.parse(getValue(storageKey));
    tabValues = tabValues.map((tab) => tab.active);
    setTabIndex(tabValues.indexOf(true));
  }, []);

  const [theme, setTheme] = useState(defaultTheme);
  const [language, setLanguage] = useState('json');

  const handleEditorChange = (value) => {
    console.log('handle editor change was called');
    setCode(value);
    let storedItems = JSON.parse(getValue(storageKey));
    storedItems[tabIndex].value = value;
    setValue(storageKey, JSON.stringify(storedItems));
  };

  useEffect(() => {
    defineTheme('oceanic-next').then((_) =>
      setTheme({ value: 'oceanic-next', label: 'Oceanic Next' })
    );
  }, [window.location]);

  useEffect(() => {
    setTabs(JSON.parse(getValue(storageKey)));
  }, [code]);

  const newTab = () => {
    let existingTabs = JSON.parse(getValue(storageKey));

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
    setValue(storageKey, JSON.stringify(existingTabs));
    setTabIndex(existingTabs.length - 1);
  };

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <EditorTabs
        width={width}
        storageKey={storageKey}
        readOnly={readOnly}
        newTab={newTab}
        tabs={tabs}
        setTabs={setTabs}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <EditorToolbar
        width={width}
        storageKey={storageKey}
        readOnly={readOnly}
        newTab={newTab}
        code={code}
        setCode={setCode}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />
      <Editor
        height="70vh"
        width={width}
        language={language || 'json'}
        value={code}
        theme={theme.value}
        defaultValue=""
        onChange={handleEditorChange}
      />
    </Container>
  );
};
export default EditorMain;
