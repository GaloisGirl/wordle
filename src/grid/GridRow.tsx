import React from 'react';
import { Stack } from '@fluentui/react';
import { GridCell } from './GridCell';
import { KEY_STATE } from '../state';

interface GridRowProps {
  answer: string
  guess: string
  completed: boolean
}

export const GridRow: React.FunctionComponent<GridRowProps> = (props) => {
    function getCellState(i: number) {
        if (!props.completed) {
            return KEY_STATE.UNKNOWN
        }
        if (props.guess[i] === props.answer[i]) {
            return KEY_STATE.CORRECT            
        }
        if (props.answer.includes(props.guess[i])) {
            return KEY_STATE.PRESENT
        }
        return KEY_STATE.ABSENT
    }

    return (
        <Stack horizontal tokens={{childrenGap: 5}} style={{justifyContent: 'center'}}>
            {[...Array(5).keys()].map(i => <GridCell key={i} char={props.guess[i]} state={getCellState(i)}></GridCell>)}
        </Stack>
    )
}
