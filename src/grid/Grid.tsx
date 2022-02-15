import React from 'react';
import { Stack } from '@fluentui/react';
import { GridRow } from './GridRow';

export const Grid: React.FunctionComponent = () => {
    return (
        <Stack tokens={{childrenGap: 5}}>
            {[...Array(6).keys()].map(x => <GridRow key={x}></GridRow>)}
        </Stack>
    )
}
