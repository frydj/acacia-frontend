import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { defineTheme } from './defineTheme';
import EditorToolbar from './EditorToolbar/EditorToolbar';
import EditorTabs from './EditorTabs/EditorTabs';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import Container from '../../Bits/Container/Container';
import useGlobal from '../../../hooks/useGlobal';

const defaultValue = `{
    "some": "value"
}`;

const key = 'editorValues';

let defaultTheme = {};
defineTheme('oceanic-next').then(
  (_) => (defaultTheme = { value: 'oceanic-next', label: 'Oceanic Next' })
);

const EditorMain = ({ width }) => {
  const {
    state: { editorValuesKey },
  } = useGlobal();
  const { getValue, setValue } = useLocalStorage();
  const [code, setCode] = useState(defaultValue);
  const [tabs, setTabs] = useState(JSON.parse(getValue(editorValuesKey)));
  const [tabIndex, setTabIndex] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // create a blank tab if nothing stored in localstorage
  useEffect(() => {
    if (!getValue(editorValuesKey)) {
      const blankTab = [
        {
          name: 'tab1',
          value: '',
          active: true,
        },
      ];
      setValue(editorValuesKey, JSON.stringify(blankTab));
    }
  }, []);

  useEffect(() => {
    const tabValues = JSON.parse(getValue(editorValuesKey));
    const tabValue = tabValues.filter((tab) => tab.active)[0];
    setCode(tabValue.value);
  }, [tabIndex, refresh]);

  useEffect(() => {
    let tabValues = JSON.parse(getValue(editorValuesKey));
    tabValues = tabValues.map((tab) => tab.active);
    setTabIndex(tabValues.indexOf(true));
  }, []);

  const [theme, setTheme] = useState(defaultTheme);
  const [language, setLanguage] = useState('json');

  const handleEditorChange = (value) => {
    console.log('handle editor change was called');
    setCode(value);
    let storedItems = JSON.parse(getValue(editorValuesKey));
    storedItems[tabIndex].value = value;
    setValue(key, JSON.stringify(storedItems));
  };

  useEffect(() => {
    defineTheme('oceanic-next').then((_) =>
      setTheme({ value: 'oceanic-next', label: 'Oceanic Next' })
    );
  }, [window.location]);

  useEffect(() => {
    setTabs(JSON.parse(getValue(editorValuesKey)));
  }, [code]);

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <EditorTabs
        width={width}
        tabs={tabs}
        setTabs={setTabs}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <EditorToolbar
        width={width}
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
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </Container>
  );
};
export default EditorMain;
