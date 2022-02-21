import React from 'react';
import { Stack } from '@fluentui/react';
import { GridRow } from './GridRow';

interface GridProps {
    answer: string,
    guesses: string[],
    currentGuess: number
}

export const Grid: React.FunctionComponent<GridProps> = (props) => {
    return (
        <Stack tokens={{childrenGap: 5}}>
            {[...Array(6).keys()].map(i => <GridRow 
                key={i} 
                answer={props.answer} 
                guess={props.guesses[i]} 
                completed={i < props.currentGuess}
            ></GridRow>)}
        </Stack>
    )
}
