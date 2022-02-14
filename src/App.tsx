import React from 'react';
import { Stack } from '@fluentui/react';

import * as Modals from './modals';
import { Keyboard } from './Keyboard';

export const App: React.FunctionComponent = () => {
  return (
    <Stack style={{ width: 600, margin: 'auto' }}>
      <Stack horizontal horizontalAlign="center" verticalAlign='center'>
        <Modals.HelpModal></Modals.HelpModal>
        <Modals.WardleModal></Modals.WardleModal>
        <h1 style={{ margin: '0 auto' }}>Wordle</h1>
        <Modals.StatsModal></Modals.StatsModal>
        <Modals.SettingsModal></Modals.SettingsModal>
      </Stack>
      <Keyboard></Keyboard>
    </Stack>
  );
};
