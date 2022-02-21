import React from 'react';
import { Stack } from '@fluentui/react';

import * as Modals from './modals';
import { Keyboard } from './Keyboard'; 
import { Grid } from './grid/Grid';
import * as State from './state';

const initialState = {
  answer: 'AZURE',
  currentGuess: 1,
  guesses: ['QUERY', ...Array(5).fill('')],
  keys: {
    R: State.KEY_STATE.CORRECT,
    E: State.KEY_STATE.PRESENT,
    U: State.KEY_STATE.PRESENT,
    Q: State.KEY_STATE.ABSENT,
    Y: State.KEY_STATE.ABSENT
  }
}

export const App: React.FunctionComponent = () => {
  const [state, dispatch] = React.useReducer(State.reducer, initialState)

  return (
    <Stack style={{ width: 600, margin: 'auto' }} tokens={{childrenGap: 20}}>
      <Stack horizontal horizontalAlign="center" verticalAlign='center'>
        <Modals.HelpModal></Modals.HelpModal>
        <Modals.WardleModal></Modals.WardleModal>
        <h1 style={{ margin: '0 auto' }}>Wordle</h1>
        <Modals.StatsModal></Modals.StatsModal>
        <Modals.SettingsModal></Modals.SettingsModal>
      </Stack>
      <Grid answer={state.answer} guesses={state.guesses} currentGuess={state.currentGuess} > </Grid>
      <Keyboard keys={state.keys}></Keyboard>
    </Stack>
  );
};
