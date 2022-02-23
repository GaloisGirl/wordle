import React from 'react';
import { MessageBar, MessageBarType, Stack } from '@fluentui/react';

import * as Modals from './modals';
import { Keyboard } from './Keyboard';
import { Grid } from './grid/Grid';
import * as State from './state';

/* const initialState = {
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
} */

const initialState = {
  // TODO: different words
  answer: 'AZURE',
  won: false,
  currentGuess: 0,
  guesses: Array(6).fill(''),
  keys: {}
}

export const App: React.FunctionComponent = () => {
  const [state, dispatch] = React.useReducer(State.reducer, initialState)

  function onLetter(l: string) {
    return (e: any) => dispatch({ type: 'letter', letter: l })
  }

  return (
    <Stack style={{ width: 540, margin: 'auto' }} tokens={{ childrenGap: 20 }}>
      <Stack horizontal horizontalAlign="center" verticalAlign='center'>
        <Modals.HelpModal></Modals.HelpModal>
        <Modals.WardleModal></Modals.WardleModal>
        <h1 style={{ margin: '0 auto' }}>Wordle</h1>
        <Modals.StatsModal></Modals.StatsModal>
        <Modals.SettingsModal></Modals.SettingsModal>
      </Stack>
      {state.won && (
          <MessageBar
            delayedRender={false}
            messageBarType={MessageBarType.success}>
            You won!
          </MessageBar>
        )}

      <Grid answer={state.answer} guesses={state.guesses} currentGuess={state.currentGuess} > </Grid>
      <Keyboard
        keys={state.keys}
        onLetter={onLetter}
        onDelete={() => dispatch({ type: 'delete' })}
        onEnter={() => dispatch({ type: 'enter' })}
      ></Keyboard>
    </Stack>
  );
};
