import React from 'react';
import { Stack } from '@fluentui/react';
import * as Modals from './modals';


export const App: React.FunctionComponent = () => {
  return (
    <Stack>
      <Stack horizontal horizontalAlign="center" verticalAlign='center'>
        <Modals.HelpModal></Modals.HelpModal>
        <Modals.WardleModal></Modals.WardleModal>
        <h1 style={{ margin: '0 4rem' }}>Wordle</h1>
        <Modals.StatsModal></Modals.StatsModal>
        <Modals.SettingsModal></Modals.SettingsModal>
      </Stack>
    </Stack>
  );
};
