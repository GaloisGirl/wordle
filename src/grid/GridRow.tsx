import React from 'react';
import { Stack } from '@fluentui/react';
import { GridCell } from './GridCell';

export const GridRow: React.FunctionComponent = () => {
    return (
        <Stack horizontal tokens={{childrenGap: 5}} style={{justifyContent: 'center'}}>
            {[...Array(5).keys()].map(x => <GridCell key={x}></GridCell>)}
        </Stack>
    )
}
